import { inject, injectable } from 'inversify';

import type { ILoggerServices, ILoggerUseCases } from './interfaces';

import { LOGGER_SERVICES } from './di.constants';
import { ILogHandler } from './interfaces';

@injectable()
export class LoggerUseCases implements ILoggerUseCases {
  constructor(@inject(LOGGER_SERVICES) private readonly loggerServices: ILoggerServices) {}

  disable(): void {
    this.loggerServices.disable();
  }

  enable(): void {
    this.loggerServices.enable();
  }

  onInit(logHandler: ILogHandler): void {
    this.loggerServices.onInit(logHandler);
  }
}
