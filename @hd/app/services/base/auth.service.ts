import { injectable } from 'inversify';
import { IHTTPClient } from '../../../core/classes/IhttpClient';
import { IHDConfig } from '../../../core/configuration';

@injectable()
export abstract class AuthService {
    protected _url?: string;
    protected _endpoint?: string;

    protected _httpClient: IHTTPClient;
    protected _hdConfig: IHDConfig;

    constructor(httpClient: IHTTPClient, configuration: IHDConfig) {
        this._httpClient = httpClient;
        this._hdConfig = configuration;
    }

    protected async UrlAsync(): Promise<string> {
        if (!this._url) {
            this._url = await this._hdConfig.getKeyAsync('WebApiUrl');
        }

        return `${this._url}/${this._endpoint}`;
    }
}
