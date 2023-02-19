import React from 'react';
import { createRoot } from 'react-dom/client';
import Icon from './Icon';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Icon>hi</Icon>);
