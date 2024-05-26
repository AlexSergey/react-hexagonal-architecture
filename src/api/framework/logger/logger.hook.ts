import logger from 'logrock';
import { useEffect, useMemo } from 'react';

import { appDiContainer } from '../../core/di-container';
import { LOGGER_USE_CASES } from '../../core/logger/di.constants';
import { ILoggerUseCases } from '../../core/logger/interfaces';

export type ILoggerCallback = (payload: string | undefined, silent: boolean) => void;

export interface ILoggerHook {
  onError: ILoggerCallback;
  onInfo: ILoggerCallback;
  onWarning: ILoggerCallback;
}

export const useLogger = ({ onError, onInfo, onWarning }: ILoggerHook): void => {
  const loggerUseCases = useMemo<ILoggerUseCases>(() => appDiContainer.get<ILoggerUseCases>(LOGGER_USE_CASES), []);

  useEffect(() => {
    loggerUseCases.onInit((type: string, payload: string | undefined, silent = false) => {
      switch (type) {
        case 'error':
          onError(payload, silent);
          break;
        case 'info':
          onInfo(payload, silent);
          break;
        case 'warning':
          onWarning(payload, silent);
          break;
        default:
          break;
      }
    });
  }, [loggerUseCases]);
};
