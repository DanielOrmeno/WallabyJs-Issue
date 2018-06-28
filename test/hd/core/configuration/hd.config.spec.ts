// tslint:disable
import 'reflect-metadata';
import { assert } from 'chai';
import { describe } from 'mocha';
import { HDConfig } from '../../../../@hd/core/configuration/index';

describe('HDConfig', function() {
  describe('geetKeyAsync', function () {
    
    it ('should return a string', async function() {
      let config = new HDConfig();
      const key = await config.getKeyAsync("testKey")
      assert.isString(key);
    });

    it ('should return a `testKey`', async function() {
      let config = new HDConfig();
      const key = await config.getKeyAsync("testKey")
      assert.equal(key, 'testKey');
    });
  });
});