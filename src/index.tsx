import { createRoot } from 'react-dom/client';
import 'reflect-metadata';

import { App } from './app';

const container = document.getElementById('root');

const root = createRoot(container as HTMLElement);

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
