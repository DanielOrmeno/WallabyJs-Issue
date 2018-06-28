import { Item } from '~/@hd/core/model/item';

export interface IItemService {
    getItemList(): Promise<Item[]>;
    getItem(id: string): Promise<Item>;
}
