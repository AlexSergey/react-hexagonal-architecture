import { inject, injectable } from 'inversify';

import type { ILoggerServices } from '../logger/interfaces';
import type { IErrorHandlerServices } from './interfaces';

import { BaseError } from '../../errors';
import { LOGGER_SERVICES } from '../logger/di.constants';

@injectable()
export class ErrorHandlerServices implements IErrorHandlerServices {
  constructor(@inject(LOGGER_SERVICES) private readonly logger: ILoggerServices) {}

  catchError(error: BaseError | Error | string, silent?: boolean): void {
    if (error instanceof BaseError) {
      this.logger.error(error.message, silent);
    } else if (error instanceof Error) {
      this.logger.error(error.message, silent);
    } else if (typeof error === 'string') {
      this.logger.error(error, silent);
    }
  }
}
