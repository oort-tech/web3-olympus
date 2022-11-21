import { jsonRpcResponse } from "./helper";

export default class {
  constructor(provider: string);

  call(payload: object): Promise<jsonRpcResponse>;

  block(blockHash: string): Promise<jsonRpcResponse>;

  blockState(blockHash: string): Promise<jsonRpcResponse>;

  blockStates(blockHash: string): Promise<jsonRpcResponse>;

  blockTraces(blockHash: string): Promise<jsonRpcResponse>;

  blockSummary(blockHash: string): Promise<jsonRpcResponse>;

  stableBlocks(limit: number, index: number): Promise<jsonRpcResponse>;

  status(): Promise<jsonRpcResponse>;

  peers(): Promise<jsonRpcResponse>;

  nodes(): Promise<jsonRpcResponse>;

  witnessList(): Promise<jsonRpcResponse>;

  version(): Promise<jsonRpcResponse>;

  debugTraceTransaction(
    blockHash: string,
    options?: { disable_storage: boolean }
  ): Promise<jsonRpcResponse>;

  debugStorageRangeAt(options: {
    account: string;
    blockHash: string;
    begin: string;
    maxResults: number;
  }): Promise<jsonRpcResponse>;

  epochApproves(epoch: number): Promise<jsonRpcResponse>;

  epochApproveReceipts(epoch: number): Promise<jsonRpcResponse>;

  epochElectedApproveReceipts(epoch: number): Promise<jsonRpcResponse>;
}
