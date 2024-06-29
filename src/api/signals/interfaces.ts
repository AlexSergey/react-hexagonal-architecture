type IValue =
  | {
      [key: string]:
        | (IValue | IValue[] | number | string)[]
        | IValue
        | IValue[]
        | never[]
        | number
        | number[]
        | string
        | string[];
    }
  | IValue[];

export type IInitValue = IValue | IValue[];

export type ISubscriber = (value: unknown) => {};

export interface ISignal<T> {
  deleteNested(query: string): void;

  getNested(query: string): void;

  getSnapshot(): T | undefined;

  setNested(query: string, value: unknown): void;

  subscribe(name: string, subscriber: ISubscriber): void;

  unsubscribe(name: string): void;

  value: T | undefined;
}
