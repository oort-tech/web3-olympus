import { jsonRpcResponse } from './helper';

interface block {
  hash: string;
  from: string;
  previous: string;
  parents: string[];
  links: string[];
  last_stable_block: string;
  last_summary_block: string;
  last_summary: string;
  timestamp: number;
  gasLimit: string;
  signature: string;
}

interface blockResponse {
  code: number;
  msg: string;
  block: block;
}

interface blockState {
  content?: {
    level: number;
    witnessed_level: number;
    best_parent: string;
  };
  is_stable?: number;
  stable_content?: {
    status: number;
    stable_index: number;
    stable_timestamp: number;
    mci: number;
    mc_timestamp: number;
    is_on_mc: number;
    is_free: number;
  };
}

interface blockStateResponse {
  code: number;
  msg: string;
  block_state?: blockState;
}

interface blockStatesResponse {
  code: number;
  msg: string;
  block_states: blockState[];
}

interface blockTraces {
  type: number;
  action: {
    call_type: string;
    from: string;
    to: string;
    gas: string;
    data: string;
    amount: string;
  };
  result: {
    gas_used: string;
    output: string | string[];
  };
  subtraces: number;
  trace_address: string[];
}

interface blockTracesResponse {
  code: number;
  msg: string;
  block_traces: blockTraces[];
}

interface blockSummaryResponse {
  code: number;
  msg: string;
  summary: string;
  previous_summary: string;
  parent_summaries: string[];
  link_summaries: string[];
  skiplist_summaries: string[];
  status: number;
}

interface stableBlocksResponse {
  code: number;
  msg: string;
  blocks: block[];
  next_index: number;
}

interface statusResponse {
  code: number;
  msg: string;
  syncing: number;
  last_stable_mci: number;
  last_mci: number;
  last_stable_block_index: number;
  epoch: number;
  epoch_period: number;
}

interface peer {
  id: string;
  endpoint: string;
}

interface peersResponse {
  code: number;
  msg: string;
  peers: peer[];
}

interface nodesResponse {
  code: number;
  msg: string;
  nodes: peer[];
}

interface witnessListResponse {
  code: number;
  msg: string;
  witness_list: string[];
}

interface versionResponse {
  code: number;
  msg: string;
  version: string;
  rpc_version: string;
  store_version: string;
}

interface structLog {
  stack: string[];
  memory?: string[];
  storage?: object;
  op: string;
  pc: string;
  gas: string;
  gasCost: string;
  depth: string;
}

interface debugTraceTransactionResponse {
  code: number;
  msg: string;
  gas: string;
  return_value: string;
  struct_logs: structLog[];
}

interface debugStorageRangeAtResponse {
  code: number;
  msg: string;
  next_key?: string;
  storage?: object;
}

interface epochApprove {
  hash: string;
  from: string;
  proof: string;
}

interface epochApprovesResponse {
  code: number;
  msg: string;
  result: epochApprove[];
}

interface approveReceiptResponse {
  code: number;
  msg: string;
  result: {
    from: string;
    output: string;
  };
}

export default class {
  constructor(provider: string);

  call(payload: object): Promise<jsonRpcResponse>;

  block(blockHash: string): Promise<blockResponse>;

  blockState(blockHash: string): Promise<blockStateResponse>;

  blockStates(blockHash: string): Promise<blockStatesResponse>;

  blockTraces(transactionHash: string): Promise<blockTracesResponse>;

  blockSummary(blockHash: string): Promise<blockSummaryResponse>;

  stableBlocks(limit: number, index: number): Promise<stableBlocksResponse>;

  status(): Promise<statusResponse>;

  peers(): Promise<peersResponse>;

  nodes(): Promise<nodesResponse>;

  witnessList(epoch?: number): Promise<witnessListResponse>;

  version(): Promise<versionResponse>;

  debugStorageRangeAt(options: { account: string; hash: string; begin: string; maxResults: number }): Promise<debugStorageRangeAtResponse>;

  epochApproves(epoch: number): Promise<epochApprovesResponse>;

  approveReceipt(hash: string): Promise<approveReceiptResponse>;
}
