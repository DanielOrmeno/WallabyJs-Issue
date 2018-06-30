import { Item } from '../../../core/model/item';

export interface IItemService {
    getListAsync(): Promise<Item[]>;
    getItemAsync(id: string): Promise<Item>;
}
