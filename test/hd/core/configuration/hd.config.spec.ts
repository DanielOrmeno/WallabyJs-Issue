import { assert } from 'chai';
import { describe } from 'mocha';
import { HDConfig } from '~/@hd/core/configuration';

describe('HDConfig', () => {
  describe('geetKeyAsync', () => {

    it ('should return a string', async () => {
      const config = new HDConfig();
      const key = await config.getKeyAsync('WebApiUrl');
      assert.isString(key);
    });

    it ('should return `http://testapi.com` for key `WebApiUrl`',  async () => {
      const config = new HDConfig();
      const key = await config.getKeyAsync('WebApiUrl');
      assert.equal(key, 'http://testapi.com');
    });

    it('should throw error if invalid key is given', async () => {
      const key = 'wawawiwa';
      const config = new HDConfig();
      assert.isNotNull(config);

      try {
        await config.getKeyAsync(key);
        assert.fail();
      } catch (error) {
        assert.isString(error);
      }
    });
  });
});