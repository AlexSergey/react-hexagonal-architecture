import { ContainerModule } from 'inversify';

import { ERROR_HANDLER_SERVICES } from './di.constants';
import { IErrorHandlerServices } from './interfaces';
import { ErrorHandlerServices } from './services';

export const errorHandlerDiContainer = new ContainerModule((bind) => {
  bind<IErrorHandlerServices>(ERROR_HANDLER_SERVICES).to(ErrorHandlerServices).inSingletonScope();
});
