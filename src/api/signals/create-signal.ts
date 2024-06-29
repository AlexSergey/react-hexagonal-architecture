import { deleteProperty, getProperty, setProperty } from 'dot-prop';
import { copyStrict } from 'fast-copy';

import { IInitValue, ISignal, ISubscriber } from './interfaces';

export const createSignal = <T extends IInitValue>(initialValue?: T): ISignal<T> => {
  let _value = initialValue;
  const subscribers: Record<string, ISubscriber> = {};

  function notify(): void {
    Object.keys(subscribers).forEach((name): void => {
      if (typeof subscribers[name] === 'function') {
        subscribers[name]!(_value);
      }
    });
  }

  return {
    deleteNested: (query: string): void => {
      if (_value) {
        deleteProperty(_value, query);
      }
    },
    getNested: (query: string): void => {
      getProperty(_value, query);
    },
    getSnapshot: (): T | undefined => {
      return copyStrict(_value);
    },
    setNested: (query: string, value: unknown): void => {
      if (_value) {
        setProperty(_value, query, value);
      }
      notify();
    },
    subscribe: (name: string, subscriber: ISubscriber): void => {
      if (subscribers[name]) {
        // eslint-disable-next-line no-console
        console.warn(`subscriber "${name}" has already registered`);
      }
      subscribers[name] = subscriber;
    },
    unsubscribe: (name: string): void => {
      delete subscribers[name];
    },
    get value(): T | undefined {
      return _value;
    },
    set value(v: T) {
      _value = v;
      notify();
    },
  };
};
