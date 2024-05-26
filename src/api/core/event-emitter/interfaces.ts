import EventEmitter from 'eventemitter3';

export interface IEventEmitterUseCases {
  emit(event: string, payload?: unknown): void;

  on(event: string, fn: EventEmitter.EventListener<string, string>): void;

  removeAllListeners(): void;

  removeListener(event: string): void;
}

export interface IEventEmitterServices {
  emit(event: string, payload?: unknown): void;

  on(event: string, fn: EventEmitter.EventListener<string, string>): void;

  removeAllListeners(): void;

  removeListener(event: string): void;
}
