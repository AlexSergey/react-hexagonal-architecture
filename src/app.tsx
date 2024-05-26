import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './api/redux/store';
import { BlogComponent } from './containers/blog/blog.component';
import { LoggerComponent } from './containers/logger/logger.component';
import { ToastManager } from './containers/toast-manager/toast-manager';

export const App: FC = () => {
  return (
    <ToastManager>
      <Provider store={store}>
        <LoggerComponent>
          <BrowserRouter>
            <Routes>
              <Route element={<BlogComponent />} path="/" />
            </Routes>
          </BrowserRouter>
        </LoggerComponent>
      </Provider>
    </ToastManager>
  );
};
