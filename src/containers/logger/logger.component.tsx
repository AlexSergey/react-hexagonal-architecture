import logger, { LoggerContainer } from 'logrock';
import React, { PropsWithChildren, useCallback, useContext } from 'react';

import { useLogger } from '../../api/framework/logger/logger.hook';
import { ToastContext } from '../toast-manager/toast-manager';

export const LoggerComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const toastApi = useContext(ToastContext);
  useLogger({
    onError: (message, silent) => {
      if (typeof message === 'string') {
        logger.error(message);
        if (!silent) {
          toastApi?.error(message);
        }
      }
    },
    onInfo: (message, silent) => {
      if (typeof message === 'string') {
        logger.info(message);
        if (!silent) {
          toastApi?.error(message);
        }
      }
    },
    onWarning: (message, silent) => {
      if (typeof message === 'string') {
        logger.warn(message);
        if (!silent) {
          toastApi?.error(message);
        }
      }
    },
  });
  const showMessage = useCallback((level: string, message: string, important?: boolean) => {
    // eslint-disable-next-line no-console
    console.log(level, message);
    if (important) {
      // eslint-disable-next-line no-alert
      alert(message);
    }
  }, []);

  return (
    <LoggerContainer
      limit={75} // Stack length limit. On overflow, the first element will be removed
      onError={(stackData): void => {
        // Send a stack of actions before the error to the backend (or otherwise process it)
        // sendToServer(stack);
        // eslint-disable-next-line no-console
        console.log(stackData);
      }}
      stdout={showMessage}
    >
      {children}
    </LoggerContainer>
  );
};
