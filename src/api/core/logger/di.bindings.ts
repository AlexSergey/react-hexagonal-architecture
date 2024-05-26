import { ContainerModule } from 'inversify';

import { LOGGER_SERVICES, LOGGER_USE_CASES } from './di.constants';
import { ILoggerServices, ILoggerUseCases } from './interfaces';
import { LoggerServices } from './services';
import { LoggerUseCases } from './use-cases';

export const loggerDiContainer = new ContainerModule((bind) => {
  bind<ILoggerServices>(LOGGER_SERVICES).to(LoggerServices).inSingletonScope();
  bind<ILoggerUseCases>(LOGGER_USE_CASES).to(LoggerUseCases).inSingletonScope();
});
