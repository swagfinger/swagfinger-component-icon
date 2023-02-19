import React from 'react';
import '../../main.css';
import styled from 'styled-components';

const IconContainerInner = ({ iconSize, color, ...rest }) => (
  <div {...rest} style={{ width: iconSize, height: iconSize, color }} />
);

const IconContainer = styled(IconContainerInner)`
  display: flex;
`;

export const Icon = ({
  iconSize = '30px',
  color = 'red',
  className = 'IconContainer',
  children = 'icon',
}) => {
  return (
    <IconContainer className={className} iconSize={iconSize} color={color}>
      {children}
    </IconContainer>
  );
};
