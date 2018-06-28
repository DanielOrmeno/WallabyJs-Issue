import { inject, injectable } from 'inversify';
import { IHDConfig } from '~/@hd/core/configuration';
import { TYPES } from '~/@hd/core/framework/ioc/types';
import { Item } from '~/@hd/core/model/item';
import { AuthService } from '../base/auth.service';
import { IItemService } from './item.service.interface';

@injectable()
export class ItemService extends AuthService implements IItemService {
    constructor(
        @inject(TYPES.HTTPClient) httpClient: any,
        @inject(TYPES.HDConfig) configuration: IHDConfig,
    ) {
        super(httpClient, configuration);
    }

    async getItemList(): Promise<Item[]> {
        return new Promise<Item[]>((resolve, _reject) => {
            resolve([
                { id: '4', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                { id: '5', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                { id: '6', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                { id: '7', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                { id: '8', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
            ]);
        });
    }

    async getItem(id: string): Promise<Item> {
        return new Promise<Item>((resolve, _reject) => {
            resolve({
                id,
                firstName: 'Daniel',
                lastName: 'Ormeno',
                date: new Date(),
                time: new Date(),
                doctor: 'Lindsay',
                code: '1910',
                urNumber: '12143',
                status: 'admitted'
            });
        });
    }
}
