import { Container } from 'inversify';
import 'reflect-metadata';
import { IItemService, ItemService } from '../../../app/services/item';
import { HTTPClient } from '../../classes/httpClient';
import { BreakpointResolver, IBreakpointResolver } from '../../classes/IBreakpointsResolver';
import { IHTTPClient } from '../../classes/IhttpClient';
import { HDConfig, IHDConfig } from '../../configuration';
import { TYPES } from './types';

const container = new Container();
container.bind<IHDConfig>(TYPES.HDConfig).to(HDConfig);
container.bind<IHTTPClient>(TYPES.HTTPClient).to(HTTPClient);
container.bind<IItemService>(TYPES.ItemService).to(ItemService);
container.bind<IBreakpointResolver>(TYPES.BreakpointResolver).to(BreakpointResolver);

export { container as Container };
