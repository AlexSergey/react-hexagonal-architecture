import { BaseError } from '../../errors';

export interface IErrorHandlerServices {
  catchError(error: BaseError | Error | string, payload?: unknown, silent?: boolean): void;
}
