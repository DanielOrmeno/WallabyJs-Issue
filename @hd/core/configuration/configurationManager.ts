import { injectable } from 'inversify';

interface IHDConfig {
    getKeyAsync(key: string): Promise<any>;
}

@injectable()
class HDConfig implements IHDConfig {
    getKeyAsync(key: string): Promise<any> {
        return new Promise((resolve, _reject) => {
            resolve(key);
        });
    }
}

export { HDConfig, IHDConfig };