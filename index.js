import React from 'react';
import { createRoot } from 'react-dom/client';
import { Icon } from './Icon';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <Icon iconSize='30px' color='error'>
      <ShoppingCartIcon />
    </Icon>
  );
}

export { Icon };
