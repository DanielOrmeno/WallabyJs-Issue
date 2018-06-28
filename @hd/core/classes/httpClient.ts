import axios from 'axios';
import { injectable } from 'inversify';
import { IHTTPClient } from './IhttpClient';

@injectable()
export class HTTPClient implements IHTTPClient {
    async getAsync(url: string, params?: any): Promise<any> {
        return axios.get(url, params);
    }
    async postAsync(url: string, body?: any, params?: any): Promise<any> {
        return axios.post(url, body, params);
    }
    async putAsync(url: string, body?: any, params?: any): Promise<any> {
        return axios.put(url, body, params);
    }
    async deleteAsync(url: string, body?: any): Promise<any> {
        return axios.delete(url, body);
    }
}
