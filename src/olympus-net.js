const http = require("http");
const https = require("https");

const errors = require('./helper');

// Apply missing polyfill for IE
require('cross-fetch/polyfill');
require('es6-promise').polyfill();
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');

/**
 * HttpProvider should be used to send rpc calls over http
 */
class HttpProvider {
  constructor(host, options) {
    options = options || {};

    this.withCredentials = options.withCredentials;
    this.timeout = options.timeout || 0;
    this.headers = options.headers;
    this.agent = options.agent;
    this.connected = false;

    // keepAlive is true unless explicitly set to false
    const keepAlive = options.keepAlive !== false;
    this.host = host || "http://localhost:8765";
    if (!this.agent) {
      if (this.host.substring(0, 5) === "https") {
        this.httpsAgent = new https.Agent({ keepAlive });
      } else {
        this.httpAgent = new http.Agent({ keepAlive });
      }
    }
  }

  /**
 * Should be used to make async request
 *
 * @method send
 * @param {Object} payload
 * @param {Function} callback triggered on end with (err, result)
 */
  call(payload, callback) {
    const options = {
      method: "POST",
      body: JSON.stringify(payload)
    };
    const headers = {};
    let controller;

    if (typeof AbortController !== "undefined") {
      controller = new AbortController();
    } else if (
      typeof window !== "undefined" &&
      typeof window.AbortController !== "undefined"
    ) {
      // Some chrome version doesn't recognize new AbortController(); so we are using it from window instead
      // https://stackoverflow.com/questions/55718778/why-abortcontroller-is-not-defined
      controller = new window.AbortController();
    }

    if (typeof controller !== "undefined") {
      options.signal = controller.signal;
    }

    // the current runtime is node
    if (typeof XMLHttpRequest === "undefined") {
      // https://github.com/node-fetch/node-fetch#custom-agent
      const agents = { httpsAgent: this.httpsAgent, httpAgent: this.httpAgent };

      if (this.agent) {
        agents.httpsAgent = this.agent.https;
        agents.httpAgent = this.agent.http;
      }

      if (this.host.substring(0, 5) === "https") {
        options.agent = agents.httpsAgent;
      } else {
        options.agent = agents.httpAgent;
      }
    }

    if (this.headers) {
      this.headers.forEach(function(header) {
        headers[header.name] = header.value;
      });
    }

    // Default headers
    if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    // As the Fetch API supports the credentials as following options 'include', 'omit', 'same-origin'
    // https://developer.mozilla.org/en-US/docs/Web/API/fetch#credentials
    // To avoid breaking change in 1.x we override this value based on boolean option.
    if (this.withCredentials) {
      options.credentials = "include";
    } else {
      options.credentials = "omit";
    }

    options.headers = headers;

    if (this.timeout > 0 && typeof controller !== "undefined") {
      this.timeoutId = setTimeout(function() {
        controller.abort();
      }, this.timeout);
    }

    const success = function(response) {
      if (this.timeoutId !== undefined) {
        clearTimeout(this.timeoutId);
      }

      // Response is a stream data so should be awaited for json response
      response
        .json()
        .then(function(data) {
          callback(null, data);
        })
        .catch(function(error) {
          callback(errors.InvalidResponse(response));
        });
    };

    const failed = function(error) {
      if (this.timeoutId !== undefined) {
        clearTimeout(this.timeoutId);
      }

      if (error.name === "AbortError") {
        callback(errors.ConnectionTimeout(this.timeout));
      }

      callback(errors.InvalidConnection(this.host));
    };

    fetch(this.host, options).then(success.bind(this)).catch(failed.bind(this));
  }
}

module.exports = HttpProvider;
