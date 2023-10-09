import { jsonRpcResponse } from "./helper";

interface accountImportResponse {
  id: number;
  jsonrpc: string;
  result: string;
  error?: { code: number; message: string };
}

interface accountRemoveResponse {
  id: number;
  jsonrpc: string;
  result: boolean;
  error?: { code: number; message: string };
}

interface block {
  hash: string;
  from: string;
  previous: string;
  parents: string[];
  links: string[];
  approves: string[];
  last_stable_block: string;
  last_summary_block: string;
  last_summary: string;
  timestamp: number;
  gasLimit: string;
  signature: string;
}

interface blockResponse {
  id: number;
  jsonrpc: string;
  result: block | null;
  error?: { code: number; message: string };
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
  id: number;
  jsonrpc: string;
  result?: blockState;
  error?: { code: number; message: string };
}

interface blockStatesResponse {
  id: number;
  jsonrpc: string;
  result: Record<string, blockState>[];
  error?: { code: number; message: string };
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
  id: number;
  jsonrpc: string;
  result: blockTraces[];
  error?: { code: number; message: string };
}

interface blockSummary {
  summary: string;
  previous_summary: string;
  parent_summaries: string[];
  skiplist_summaries: string[];
  status: number;
}

interface blockSummaryResponse {
  id: number;
  jsonrpc: string;
  result: blockSummary | null;
  error?: { code: number; message: string };
}

interface stableBlocksResponse {
  id: number;
  jsonrpc: string;
  blocks: block[];
  next_index: number;
  error?: { code: number; message: string };
}

interface statusResponse {
  id: number;
  jsonrpc: string;
  result: {
    syncing: number;
    last_stable_mci: number;
    last_mci: number;
    last_stable_block_index: number;
    epoch: number;
    epoch_period: number;
  };
  error?: { code: number; message: string };
}

interface peer {
  id: string;
  endpoint: string;
}

interface peersResponse {
  id: number;
  jsonrpc: string;
  result: peer[];
  error?: { code: number; message: string };
}

interface nodesResponse {
  id: number;
  jsonrpc: string;
  result: peer[];
  error?: { code: number; message: string };
}

interface witnessListResponse {
  id: number;
  jsonrpc: string;
  result: string[];
  error?: { code: number; message: string };
}

interface versionResponse {
  id: number;
  jsonrpc: string;
  result: {
    version: string;
    rpc_version: string;
    store_version: string;
  };
  error?: { code: number; message: string };
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

interface epochApprove {
  hash: string;
  from: string;
  proof: string;
}

interface epochApprovesResponse {
  id: number;
  jsonrpc: string;
  result: epochApprove[];
  error?: { code: number; message: string };
}

interface approveReceiptResponse {
  id: number;
  jsonrpc: string;
  result: {
    from: string;
    output: string;
    status: string;
  };
  error?: { code: number; message: string };
}

interface epochWorkTransactionResponse {
  id: number;
  jsonrpc: string;
  result?: string;
  error?: {
    code: number;
    message: string;
  }
}

export default class {
  constructor(provider: string);

  call(payload: object): Promise<jsonRpcResponse>;

  accountImport(json: string): Promise<accountImportResponse>;

  accountExport(account: string): Promise<Error>;

  accountRemove(
    account: string,
    password: string
  ): Promise<accountRemoveResponse>;

  block(blockHash: string): Promise<blockResponse>;

  blockState(blockHash: string): Promise<blockStateResponse>;

  blockStates(blockHash: string[]): Promise<blockStatesResponse>;

  blockTraces(transactionHash: string): Promise<blockTracesResponse>;

  blockSummary(blockHash: string): Promise<blockSummaryResponse>;

  stableBlocks(index: number, limit: number): Promise<stableBlocksResponse>;

  status(): Promise<statusResponse>;

  peers(): Promise<peersResponse>;

  nodes(): Promise<nodesResponse>;

  witnessList(epoch: number): Promise<witnessListResponse>;

  version(): Promise<versionResponse>;

  debugStorageRangeAt(): Promise<Error>;

  epochApproves(epoch: number): Promise<epochApprovesResponse>;

  approveReceipt(hash: string): Promise<approveReceiptResponse>;

  epochWorkTransaction(epoch: number): Promise<epochWorkTransactionResponse>;
}
