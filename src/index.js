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

  // Import your keystore file to the remote node
  accountImport(json) {
    const payload = {
      id: 1,
      jsonrpc: '2.0',
      method: 'account_import',
      params: [json]
    };
    return this.call(payload);
  }

  // Export the keystore file managed in the node, provided that it has been imported.
  accountExport() {
    return new Error("accountExport has been removed from current version.")
  }

  // This function removes the keystore file imported through account_import, and the node is no longer responsible for managing the account.
  accountRemove(account, password) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'account_remove',
      params: [account, password]
    };
    return this.call(payload);
  }

  // Get details of one block.
  block(blockHash) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'block',
      params: [blockHash]
    };
    return this.call(payload);
  }

  // Get state of a block
  blockState(blockHash) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'block_state',
      params: [blockHash]
    };

    return this.call(payload);
  }

  // Get states of many blocks.
  blockStates(blockHashes) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'block_states',
      params: [...blockHashes]
    };

    return this.call(payload);
  }

  // Get the trace of internal transactions in a smart contract.
  blockTraces(transactionHash) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'block_traces',
      params: [transactionHash]
    };

    return this.call(payload);
  }

  // Retrieve the summary for a specific block.
  blockSummary(blockHash) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'block_summary',
      params: [blockHash]
    };

    return this.call(payload);
  }

  // Retrieve the stabled blocks for a specific mci value.
  stableBlocks(index, limit) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'stable_blocks',
      params: [String(index), String(limit)]
    };

    return this.call(payload);
  }

  // Retrieve the current status of DAG on the node.
  status() {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'status',
    };

    return this.call(payload);
  }

  // List the peers connected to the node.
  peers() {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'peers',
    };

    return this.call(payload);
  }

  // List the nodes connected to the node.
  nodes() {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'nodes',
    };

    return this.call(payload);
  }

  // Retrieve the list of witnesses.
  witnessList(epoch) {
    const newEpoch = epoch != null && epoch > -1 ? String(epoch) : '0';
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'witness_list',
      params: [newEpoch]
    };

    return this.call(payload);
  }

  // Acquire the current node version, rpc interface version, and database version.
  version() {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'version',
    };

    return this.call(payload);
  }

  // Acquire the data in storage after executing a transaction in a contract.
  debugStorageRangeAt() {
    return new Error("debugStorageRangeAt has been removed from current version.");
  }

  // List the all approval messages that have been processed in the specified epoch.
  epochApproves(epoch) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'epoch_approves',
      params: [String(epoch)]
    };

    return this.call(payload);
  }

  approveReceipt(hash) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'approve_receipt',
      params: [String(hash)]
    };

    return this.call(payload);
  }

  epochWorkTransaction(epoch) {
    const payload = {
      id: 1,
      jsonrpc: "2.0",
      method: 'epoch_work_transaction',
      params: [String(epoch)]
    };

    return this.call(payload);
  }
}

module.exports = OlympusRequest;
