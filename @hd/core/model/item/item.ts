import { IItem } from './IItem';

export class Item implements IItem {
    id?: string;
    firstName?: string;
    lastName?: string;
    doctor?: string;
    code?: string;
    urNumber?: string;
    status?: string;
    date?: Date;
    time?: Date;

    constructor() {}
}
