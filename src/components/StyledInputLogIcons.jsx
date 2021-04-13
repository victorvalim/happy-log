// import React from 'react';
import styled from 'styled-components';

export const WrapperImg = styled.div`
  width: 50px;
  display: ${(props) => (props.visibility ? 'block' : 'none')};
 
`;

export const Wrapper2 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
