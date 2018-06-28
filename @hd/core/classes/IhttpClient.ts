export interface IHTTPClient {
    getAsync(url: string, params?: any): Promise<any>;
    postAsync(url: string, body?: any, params?: any): Promise<any>;
    putAsync(url: string, body?: any, params?: any): Promise<any>;
    deleteAsync(url: string, body?: any, params?: any): Promise<any>;
}