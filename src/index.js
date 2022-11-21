const OlympusNet = require("./olympus-net");

class OlympusRequest {
  constructor(provider) {
    this.request = new OlympusNet(provider);
  }

  // Get Async function with olympus-net.
  call(payload) {
    return new Promise((resolve, reject) => {
      this.request.call(payload, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Get details of one block.
  block(blockHash) {
    const payload = {
      action: "block",
      hash: blockHash
    };
    return this.call(payload);
  }

  // Get state of a block
  blockState(blockHash) {
    const payload = {
      action: "block_state",
      hash: blockHash
    };

    return this.call(payload);
  }

  // Get states of many blocks.
  blockStates(blockHashes) {
    const payload = {
      action: "block_states",
      hash: blockHashes
    };

    return this.call(payload);
  }

  // Get the trace of internal transactions in a smart contract.
  blockTraces(blockHash) {
    const payload = {
      action: "block_traces",
      hash: blockHash
    };

    return this.call(payload);
  }

  // Retrieve the summary for a specific block.
  blockSummary(blockHash) {
    const payload = {
      action: "block_summary",
      hash: blockHash
    };

    return this.call(payload);
  }

  // Retrieve the stabled blocks for a specific mci value.
  stableBlocks(limit, index) {
    const payload = {
      action: "stable_blocks",
      limit,
      index
    };

    return this.call(payload);
  }

  // Retrieve the current status of DAG on the node.
  status() {
    const payload = {
      action: "status"
    };

    return this.call(payload);
  }

  // List the peers connected to the node.
  peers() {
    const payload = {
      action: "peers"
    };

    return this.call(payload);
  }

  // List the nodes connected to the node.
  nodes() {
    const payload = {
      action: "nodes"
    };

    return this.call(payload);
  }

  // Retrieve the list of witnesses.
  witnessList() {
    const payload = {
      action: "witness_list"
    };

    return this.call(payload);
  }

  // Acquire the current node version, rpc interface version, and database version.
  version() {
    const payload = {
      action: "version"
    };

    return this.call(payload);
  }

  // Interface for debugging transaction. Returns the opcode of a transaction and the stack and memory information when it is executesd.
  debugTraceTransaction(blockHash, options) {
    const payload = {
      action: "debug_trace_transaction",
      hash: blockHash
    };

    payload.options = options || {
      disable_storage: false
    };

    return this.call(payload);
  }

  // Acquire the data in storage after executing a transaction in a contract.
  debugStorageRangeAt({ account, blockHash, begin, maxResults }) {
    const payload = {
      action: "debug_storage_range_at",
      hash: blockHash,
      account: account,
      begin: begin,
      max_results: maxResults
    };

    return this.call(payload);
  }

  // List the all approval messages that have been processed in the specified epoch.
  epochApproves(epoch) {
    const payload = {
      action: "epoch_approves",
      epoch
    };

    return this.call(payload);
  }

  // List the approve receipts for all approval messages that have been processed in the specified epoch.
  epochApproveReceipts(epoch) {
    const payload = {
      action: "epoch_approve_receipts",
      epoch
    };

    return this.call(payload);
  }

  // Get the election result corresponding to the epoch.
  epochElectedApproveReceipts(epoch) {
    const payload = {
      action: "epoch_elected_approve_receipts",
      epoch
    };

    return this.call(payload);
  }
}


module.exports = OlympusRequest;