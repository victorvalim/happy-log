// import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.h1`
width: 500px;
  padding: 4em;
  background: papayawhip;
  visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
  
`;

export const Wrapper2 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
