import { injectable } from 'inversify';

interface IHDConfig {
    getKeyAsync(key: string): Promise<any>;
}

@injectable()
class HDConfig implements IHDConfig {
    getKeyAsync(key: string): Promise<any> {
        return new Promise((resolve, _reject) => {
            const v = key === 'WebApiUrl' ? 'http://testapi.com' : null;

            if (v) {
                resolve(v);
            } else {
                _reject(`Unable to get configuration value for key ${key}`);
            }
        });
    }
}

export { HDConfig, IHDConfig };