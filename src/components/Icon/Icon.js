import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  display: flex;

  //color affects the svg if svg has currentColor set somewhere
  color: ${(props) => props.color};
  // whatever is passed through as children
  > * {
    width: 100%;
    height: 100%;
  }
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
