import React from 'react';
import '../../main.css';
import styled from 'styled-components';

// Extract the functional component
const IconContainerInner = (props) => <div {...props} />;

// Define the styled component using the extracted component
const IconContainer = styled(IconContainerInner)`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  display: flex;

  color: ${(props) => props.color};
  > * {
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
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
