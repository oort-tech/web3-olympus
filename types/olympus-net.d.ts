import type { Agent as HTTPAgent } from 'http';
import type { Agent as HTTPSAgent } from 'https';

export interface HttpHeader {
    name: string;
    value: string;
}

export interface HttpProviderAgent {
    http?: HTTPAgent;
    https?: HTTPSAgent;
}

export interface HttpProviderOptions {
    withCredentials?: boolean;
    timeout?: number;
    headers?: HttpHeader[];
    agent?: HttpProviderAgent;
    keepAlive?: boolean;
}

export class HttpProvider {
    host: string;

    withCredentials?: boolean;
    timeout: number;
    headers?: HttpHeader[];
    agent?: HttpProviderAgent;
    connected: boolean;

    constructor(host?: string, options?: HttpProviderOptions);

    call(
        payload: object,
        callback?: (
            error: Error | null,
            result: any | undefined
        ) => void
    ): void;
}