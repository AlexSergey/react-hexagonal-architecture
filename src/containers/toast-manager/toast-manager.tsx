import React, { PropsWithChildren, createContext, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext<{
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
} | null>(null);

export const ToastManager: React.FC<PropsWithChildren> = ({ children }) => {
  const onInfo = useCallback((message: string) => {
    toast.info(message);
  }, []);
  const onError = useCallback((message: string) => {
    toast.error(message);
  }, []);
  const onWarn = useCallback((message: string) => {
    toast.warning(message);
  }, []);

  return (
    <>
      <ToastContext.Provider
        value={{
          error: onError,
          info: onInfo,
          warning: onWarn,
        }}
      >
        {children}
      </ToastContext.Provider>
      <ToastContainer />
    </>
  );
};
