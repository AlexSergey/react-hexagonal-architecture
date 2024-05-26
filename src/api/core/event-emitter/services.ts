import EventEmitter from 'eventemitter3';
import { injectable } from 'inversify';

import type { IEventEmitterServices } from './interfaces';

const eventEmitter = new EventEmitter();

@injectable()
export class EventEmitterServices implements IEventEmitterServices {
  eventEmitter: EventEmitter = eventEmitter;

  emit(event: string, payload?: unknown): void {
    this.eventEmitter.emit(event, payload);
  }

  on(event: string, fn: EventEmitter.EventListener<string, string>): void {
    this.eventEmitter.on(event, fn);
  }

  removeAllListeners(): void {
    this.eventEmitter.removeAllListeners();
  }

  removeListener(event: string): void {
    this.eventEmitter.removeListener(event);
  }
}
