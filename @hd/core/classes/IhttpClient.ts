interface IHTTPClient {
    getAsync(url: string, params?: any): Promise<any>;
    postAsync(url: string, body?: any, params?: any): Promise<any>;
    putAsync(url: string, body?: any, params?: any): Promise<any>;
    deleteAsync(url: string, body?: any, params?: any): Promise<any>;
}

interface IHTTPClientProvider {
    get(url: string, params?: any): any;
    post(url: string, body?: any, params?: any): any;
    put(url: string, body?: any, params?: any): any;
    delete(url: string, body?: any, params?: any): any;
}

export {
    IHTTPClient,
    IHTTPClientProvider
};
