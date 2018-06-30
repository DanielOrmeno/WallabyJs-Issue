import { injectable } from 'inversify';
import { IHTTPClientProvider } from '../../core/classes/IhttpClient';

@injectable()
export class MockAxios implements IHTTPClientProvider {
    get(url: string, params?: any): any {
        if (url === 'http://testapi.com/Items/list') {
            return new Promise((resolve, _reject) => {
                resolve([
                    { id: '4', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                    { id: '5', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                    { id: '6', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                    { id: '7', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                    { id: '8', date: new Date(), time: new Date(), doctor: 'John Doe', code: '1', urNumber: '13', status: 'admitted' },
                ]);
            });
        } else if (url.startsWith('http://testapi.com/Items/item/')) {
            if (url.endsWith('/123')) {
                return new Promise((resolve, _reject) => {
                    resolve({
                        id: '123',
                        firstName: 'Daniel',
                        lastName: 'Ormeno',
                        date: new Date(),
                        time: new Date(),
                        doctor: 'Lindsay',
                        code: '1910',
                        urNumber: '12143',
                        status: 'admitted'
                    });
                });
            } else {
                return null;
            }
        }
    }

    post(url: string, body?: any, params?: any) {
        throw new Error('Method not implemented.');
    }

    put(url: string, body?: any, params?: any) {
        throw new Error('Method not implemented.');
    }
    delete(url: string, body?: any, params?: any) {
        throw new Error('Method not implemented.');
    }
}
