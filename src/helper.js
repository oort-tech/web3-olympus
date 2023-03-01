module.exports = {
  InvalidConnection: function (host, event) {
    return this.ConnectionError("CONNECTION ERROR: Couldn't connect to node " + host + '.', event);
  },
  InvalidProvider: function () {
    return new Error('Provider not set or invalid');
  },
  InvalidResponse: function (result) {
    var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
    return new Error(message);
  },
  ConnectionTimeout: function (ms) {
    return new Error('CONNECTION TIMEOUT: timeout of ' + ms + ' ms achived');
  },
};
