import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Icon } from './components/Icon';

const container = document.getElementById('root');
const root = createRoot(container);

const IconExample = () => {
  return (
    <Icon>
      <ShoppingCartIcon />
    </Icon>
  );
};

root.render(<IconExample />);
