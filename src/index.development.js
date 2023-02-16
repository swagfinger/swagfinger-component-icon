import React from 'react';
import { createRoot } from 'react-dom/client';
import { Icon } from './component/Icon';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Icon iconSize='30px' color='error'>
    <ShoppingCartIcon />
  </Icon>
);
