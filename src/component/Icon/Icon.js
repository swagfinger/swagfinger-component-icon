import styled from 'styled-components';
import React from 'react';

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
    fill-opacity: ${(props) => props.fill ?? '100%'};
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
  }
`;

export const Icon = ({
  iconSize = '30px',
  color = '',
  className = '',
  children = undefined,
  fill = null,
  stroke = null,
}) => {
  return (
    <IconContainer
      iconSize={iconSize}
      color={color}
      className={className}
      fill={fill}
      stroke={stroke}
    >
      {children}
    </IconContainer>
  );
};
