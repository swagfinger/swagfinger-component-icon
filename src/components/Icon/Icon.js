import React from 'react';
import styled from '@emotion/styled';

const IconContainer = styled(
  ({ iconSize, color, className, children, ...rest }) => (
    <div
      className={className}
      style={{ width: iconSize, height: iconSize, color }}
    >
      {children}
    </div>
  )
)`
  display: flex;
`;

const Icon = (props) => {
  const {
    iconSize = '30px',
    color = 'red',
    className = 'IconContainer',
    children = 'icon',
  } = props;

  return (
    <IconContainer className={className} iconSize={iconSize} color={color}>
      {children}
    </IconContainer>
  );
};

export default Icon;
