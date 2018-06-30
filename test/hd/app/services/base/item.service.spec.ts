// tslint:disable-next-line:no-submodule-imports
import { assert } from 'chai';
import { describe } from 'mocha';
import { MockAxios } from '~/@hd/app/mocks/mock.axios';
import { MockHdConfig } from '~/@hd/app/mocks/mock.config';
import { ItemService } from '~/@hd/app/services/item/item.service';
import { HTTPClient } from '~/@hd/core/classes/httpClient';

const mockHttpClient = new HTTPClient(new MockAxios());
const mockConfig = new MockHdConfig();

describe('ItemService', ()  => {
    describe('getListAsync', () => {
        it('returns array of items', async () => {
            const itemService = new ItemService(mockHttpClient, mockConfig);
            const itemList = await itemService.getListAsync();
            assert.isNotNull(itemList);
            assert.isArray(itemList);
        });

        it('returns 5 items from provider', async () => {
            const itemService = new ItemService(mockHttpClient, mockConfig);
            const itemList = await itemService.getListAsync();
            assert.equal(itemList.length, 5);
        });
    });

    describe('getItemAsync', () => {
        it('returns a single item', async () => {
            const itemService = new ItemService(mockHttpClient, mockConfig);
            const item = await itemService.getItemAsync('123');
            assert.isNotNull(item);
            assert.isObject(item);
        });

        it('returns null for invalid id', async () => {
            const itemService = new ItemService(mockHttpClient, mockConfig);
            const item = await itemService.getItemAsync('234');
            assert.isNull(item);
        });
    });
});
