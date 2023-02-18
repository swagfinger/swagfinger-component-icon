import React from 'react';
import { createRoot } from 'react-dom/client';
import { Icon } from './components/Icon';

const container = document.getElementById('root');
const root = createRoot(container);

const IconExample = () => {
  return <Icon>hi</Icon>;
};

root.render(<IconExample />);
