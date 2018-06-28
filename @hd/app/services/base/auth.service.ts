import { injectable } from 'inversify';
import { IHTTPClient } from '~/@hd/core/classes/ihttpClient';
import { IHDConfig } from '~/@hd/core/configuration';

@injectable()
export class AuthService {
    protected _url?: string;
    protected _endpoint?: string;

    protected _httpClient?: IHTTPClient;

    constructor(httpClient: IHTTPClient, configuration: IHDConfig) {
        this._httpClient = httpClient;

        if (configuration) {
            configuration.getKeyAsync('WebApiUrl').then((r: string) => this._url = r);
        }
    }
    set endpoint(value: string) {
        this._endpoint = value;
    }
}
