import { jsonRpcResponse } from "./helper";

export default class {
  constructor(provider: string);

  call(payload: object): Promise<jsonRpcResponse>;

  block(blockHash: string): Promise<blockResponse>;

  blockState(blockHash: string): Promise<blockStateResponse>;

  blockStates(blockHash: string): Promise<blockStatesResponse>;

  blockTraces(blockHash: string): Promise<blockTracesResponse>;

  blockSummary(blockHash: string): Promise<blockSummaryResponse>;

  stableBlocks(limit: number, index: number): Promise<stableBlocksResponse>;

  status(): Promise<statusResponse>;

  peers(): Promise<peersResponse>;

  nodes(): Promise<nodesResponse>;

  witnessList(): Promise<witnessListResponse>;

  version(): Promise<versionResponse>;

  debugTraceTransaction(
    blockHash: string,
    options?: { disable_storage: boolean }
  ): Promise<debugTraceTransactionResponse>;

  debugStorageRangeAt(options: {
    account: string;
    blockHash: string;
    begin: string;
    maxResults: number;
  }): Promise<debugStorageRangeAtResponse>;

  epochApproves(epoch: number): Promise<epochApprovesResponse>;

  epochApproveReceipts(epoch: number): Promise<epochApproveReceiptsResponse>;

  epochElectedApproveReceipts(epoch: number): Promise<epochElectedApproveReceiptsResponse>;
}
