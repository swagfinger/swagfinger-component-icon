import React from 'react';
import { createRoot } from 'react-dom/client';
import Icon from './Icon';

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<Icon color='red'>hi</Icon>);
}

export { default as Icon } from './Icon';
