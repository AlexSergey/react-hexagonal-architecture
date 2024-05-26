import { injectable } from 'inversify';

import type { ILogHandler, ILoggerServices } from './interfaces';

import { BaseError } from '../../errors';

@injectable()
export class LoggerServices implements ILoggerServices {
  logger: ILogHandler = () => {};

  state = true;

  disable(): void {
    this.state = false;
  }

  enable(): void {
    this.state = true;
  }

  error(payload?: string, silent?: boolean): void {
    if (this.state) {
      this.logger('error', payload, silent);
    }
  }

  info(payload?: string): void {
    if (this.state) {
      this.logger('info', payload);
    }
  }

  log(payload?: string): void {
    if (this.state) {
      this.logger('log', payload);
    }
  }

  onInit(logHandler: ILogHandler): void {
    this.logger = logHandler;
  }
}
