import EventEmitter from 'eventemitter3';
import { inject, injectable } from 'inversify';

import type { IEventEmitterServices, IEventEmitterUseCases } from './interfaces';

import { EVENT_EMITTER_SERVICES } from './di.constants';

@injectable()
export class EventEmitterUseCases implements IEventEmitterUseCases {
  constructor(@inject(EVENT_EMITTER_SERVICES) private readonly eventEmitterServices: IEventEmitterServices) {}

  emit(event: string, payload?: unknown): void {
    this.eventEmitterServices.emit(event, payload);
  }

  on(event: string, fn: EventEmitter.EventListener<string, string>): void {
    this.eventEmitterServices.on(event, fn);
  }

  removeAllListeners(): void {
    this.eventEmitterServices.removeAllListeners();
  }

  removeListener(event: string): void {
    this.eventEmitterServices.removeListener(event);
  }
}
