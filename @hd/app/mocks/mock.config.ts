import { IHDConfig } from '../../core/configuration';

export class MockHdConfig implements IHDConfig {
    getKeyAsync(key: string): Promise<any> {
        return new Promise((resolve, _reject) => {
            resolve(key === 'WebApiUrl' ? 'http://testapi.com' : null);
        });
    }

}
