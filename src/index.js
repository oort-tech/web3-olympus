const OlympusNet = require('./olympus-net');

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
      action: 'block',
      hash: blockHash,
    };
    return this.call(payload);
  }

  // Get state of a block
  blockState(blockHash) {
    const payload = {
      action: 'block_state',
      hash: blockHash,
    };

    return this.call(payload);
  }

  // Get states of many blocks.
  blockStates(blockHashes) {
    const payload = {
      action: 'block_states',
      hashes: blockHashes,
    };

    return this.call(payload);
  }

  // Get the trace of internal transactions in a smart contract.
  blockTraces(transactionHash) {
    const payload = {
      action: 'block_traces',
      hash: transactionHash,
    };

    return this.call(payload);
  }

  // Retrieve the summary for a specific block.
  blockSummary(blockHash) {
    const payload = {
      action: 'block_summary',
      hash: blockHash,
    };

    return this.call(payload);
  }

  // Retrieve the stabled blocks for a specific mci value.
  stableBlocks(limit, index) {
    const payload = {
      action: 'stable_blocks',
      limit: String(limit),
      index: String(index),
    };

    return this.call(payload);
  }

  // Retrieve the current status of DAG on the node.
  status() {
    const payload = {
      action: 'status',
    };

    return this.call(payload);
  }

  // List the peers connected to the node.
  peers() {
    const payload = {
      action: 'peers',
    };

    return this.call(payload);
  }

  // List the nodes connected to the node.
  nodes() {
    const payload = {
      action: 'nodes',
    };

    return this.call(payload);
  }

  // Retrieve the list of witnesses.
  witnessList(epoch) {
    const payload = {
      action: 'witness_list',
    };
    if (epoch != null && epoch > -1) {
      payload.epoch = String(epoch);
    }

    return this.call(payload);
  }

  // Acquire the current node version, rpc interface version, and database version.
  version() {
    const payload = {
      action: 'version',
    };

    return this.call(payload);
  }

  // Acquire the data in storage after executing a transaction in a contract.
  debugStorageRangeAt({ account, hash, begin, maxResults }) {
    const payload = {
      action: 'debug_storage_range_at',
      hash: hash,
      account: account,
      begin: begin,
      max_results: maxResults,
    };

    return this.call(payload);
  }

  // List the all approval messages that have been processed in the specified epoch.
  epochApproves(epoch) {
    const payload = {
      action: 'epoch_approves',
      epoch: String(epoch),
    };

    return this.call(payload);
  }

  approveReceipt(hash) {
    const payload = {
      action: 'approve_receipt',
      hash: String(hash),
    };

    return this.call(payload);
  }
}

module.exports = OlympusRequest;
