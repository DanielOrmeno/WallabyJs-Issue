import { inject, injectable } from 'inversify';
import { TYPES } from '../framework/ioc/types';
import { IHTTPClient, IHTTPClientProvider } from './IhttpClient';

@injectable()
export class HTTPClient implements IHTTPClient {
    private _provider: IHTTPClientProvider;
    constructor(@inject(TYPES.HTTPClientProvider) provider: IHTTPClientProvider) {
        this._provider = provider;
    }

    async getAsync(url: string, params?: any): Promise<any> {
        if (!url || Array.from(url).indexOf(' ') >= 0) {
            throw Error(`Invalid url ${url}`);
        }
        return this._provider.get(url, params);
    }
    async postAsync(url: string, body?: any, params?: any): Promise<any> {
        if (!url || Array.from(url).indexOf(' ') >= 0) {
            throw Error(`Invalid url ${url}`);
        }
        return this._provider.post(url, body, params);
    }
    async putAsync(url: string, body?: any, params?: any): Promise<any> {
        if (!url || Array.from(url).indexOf(' ') >= 0) {
            throw Error(`Invalid url ${url}`);
        }
        return this._provider.put(url, body, params);
    }
    async deleteAsync(url: string, body?: any): Promise<any> {
        if (!url || Array.from(url).indexOf(' ') >= 0) {
            throw Error(`Invalid url ${url}`);
        }
        return this._provider.delete(url, body);
    }
}
