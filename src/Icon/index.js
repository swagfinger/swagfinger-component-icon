import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div``;

const Icon = ({ children }) => {
  return <IconContainer>{children}</IconContainer>;
};

export default Icon;
