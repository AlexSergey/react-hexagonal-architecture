import { ContainerModule } from 'inversify';

import { EVENT_EMITTER_SERVICES, EVENT_EMITTER_USE_CASES } from './di.constants';
import { IEventEmitterServices, IEventEmitterUseCases } from './interfaces';
import { EventEmitterServices } from './services';
import { EventEmitterUseCases } from './use-cases';

export const eventEmitterDiContainer = new ContainerModule((bind) => {
  bind<IEventEmitterServices>(EVENT_EMITTER_SERVICES).to(EventEmitterServices).inSingletonScope();
  bind<IEventEmitterUseCases>(EVENT_EMITTER_USE_CASES).to(EventEmitterUseCases).inSingletonScope();
});
