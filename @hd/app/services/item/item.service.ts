import { inject, injectable } from 'inversify';
import { IHTTPClient } from '../../../core/classes/IhttpClient';
import { IHDConfig } from '../../../core/configuration';
import { TYPES } from '../../../core/framework/ioc/types';
import { Item } from '../../../core/model/item';
import { AuthService } from '../base/auth.service';
import { IItemService } from './item.service.interface';

@injectable()
export class ItemService extends AuthService implements IItemService {
    constructor(
        @inject(TYPES.HTTPClient) httpClient: IHTTPClient,
        @inject(TYPES.HDConfig) configuration: IHDConfig,
    ) {
        super(httpClient, configuration);
        this._endpoint = 'Items';
    }

    async getListAsync(): Promise<Item[]> {
        const url = `${await this.UrlAsync()}/list`;
        return this._httpClient.getAsync(url);
    }

    async getItemAsync(id: string): Promise<Item> {
        const url = `${await this.UrlAsync()}/item/${id}`;
        return this._httpClient.getAsync(url);
    }
}
