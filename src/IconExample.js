import React from 'react';
import Icon from './Icon';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const IconExample = () => {
  return (
    <>
      <Icon iconSize='30px' color='error'>
        <ShoppingCartIcon />
      </Icon>
    </>
  );
};
