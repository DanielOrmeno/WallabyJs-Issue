import { assert } from 'chai';
import { describe } from 'mocha';
import { MockAxios } from '~/@hd/app/mocks/mock.axios';
import { HTTPClient } from '~/@hd/core/classes/httpClient';

describe('HTTPClient', () => {
    const client = new HTTPClient(new MockAxios());
    const invalidUrls = ['', ' ', '   '];

    describe('getAsync', () => {
        it ('throws error for invalid strings', async () => {
            invalidUrls.forEach(async s => {
                try {
                    await client.getAsync(s);
                    assert.fail();
                } catch (error) {
                    assert.isNotNull(error);
                    assert.equal(error.message, `Invalid url ${s}`);
                }
            });
        });

        it ('handles null params', async () => {
            const result = await client.getAsync('http://testapi.com/Items/list', null);
            assert.isArray(result);
        });

        it ('returns mocked value from provider',  async () => {
            const result = await client.getAsync('http://testapi.com/Items/list');
            assert.isArray(result);
            assert.lengthOf(result, 5, 'Expected length to be 5');
        });
    });

    describe('postAsync', () => {
        it('throws error for invalid urls', async () => {
            invalidUrls.forEach(async s => {
                try {
                    await client.postAsync(s);
                    assert.fail();
                } catch (error) {
                    assert.isNotNull(error);
                    assert.equal(error.message, `Invalid url ${s}`);
                }
            });
        });

        it ('returns mocked value from provider',  async () => {
            const result = await client.postAsync('http://testapi.com/Items/list');
            assert.isArray(result);
            assert.lengthOf(result, 5, 'Expected length to be 5');
        });
    });

    describe('putAsync', () => {
        it('throws error for invalid urls', async () => {
            invalidUrls.forEach(async s => {
                try {
                    await client.putAsync(s);
                    assert.fail();
                } catch (error) {
                    assert.isNotNull(error);
                    assert.equal(error.message, `Invalid url ${s}`);
                }
            });
        });

        it ('returns mocked value from provider',  async () => {
            const result = await client.putAsync('http://testapi.com/Items/list');
            assert.isArray(result);
            assert.lengthOf(result, 5, 'Expected length to be 5');
        });
    });

    describe('deleteAsync', () => {
        it('throws error for invalid urls', async () => {
            invalidUrls.forEach(async s => {
                try {
                    await client.deleteAsync(s);
                    assert.fail();
                } catch (error) {
                    assert.isNotNull(error);
                    assert.equal(error.message, `Invalid url ${s}`);
                }
            });
        });

        it ('returns mocked value from provider',  async () => {
            const result = await client.deleteAsync('http://testapi.com/Items/list');
            assert.isArray(result);
            assert.lengthOf(result, 5, 'Expected length to be 5');
        });
    });
  });