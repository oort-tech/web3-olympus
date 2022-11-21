export interface jsonRpcResponse {
  code: number;
  msg: string;
  [dataType: string]: any;
}

export default class {
  static InvalidConnection(host: string, event?: any): Error;
  static InvalidProvider(): Error;
  static ErrorResponse(result: Error): Error;
  static ConnectionTimeout(ms: string): Error;
}
