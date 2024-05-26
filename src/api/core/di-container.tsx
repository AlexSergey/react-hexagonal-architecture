import { Container } from 'inversify';

import { postsDiContainer } from '../features/posts/di.bindings';
import { errorHandlerDiContainer } from './error-handler/di.bindings';
import { eventEmitterDiContainer } from './event-emitter/di.bindings';
import { loggerDiContainer } from './logger/di.bindings';

export const appDiContainer = new Container();
appDiContainer.load(postsDiContainer, eventEmitterDiContainer, loggerDiContainer, errorHandlerDiContainer);
