// import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.h1`
width: 500px;
  padding: 4em;
  background: papayawhip;
  display: ${(props) => (props.visibility ? 'block' : 'none')};
  
`;

export const Wrapper2 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
