import React from 'react';
import { createRoot } from 'react-dom/client';
import { Icon } from './components/Icon';

import './main.css';

const container = document.getElementById('root');
const root = createRoot(container);

const IconExample = () => {
  return (
    <>
      <div className='text-3xl font-bold underline'>hello world</div>
      <Icon>hi</Icon>
    </>
  );
};

root.render(<IconExample />);
