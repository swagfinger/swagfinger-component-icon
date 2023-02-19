import React from 'react';
import styled from 'styled-components';

const IconContainer = styled(({ children, color }) => (
  <div style={{ color: color }}>{children}</div>
))``;

const Icon = ({ children, color }) => {
  return <IconContainer color={color}>{children}</IconContainer>;
};

export default Icon;
