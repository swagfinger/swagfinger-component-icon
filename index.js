import React from 'react';
import App from './src/App';
import { createRoot } from 'react-dom/client';

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('root');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

export { Icon } from './src/Icon';
