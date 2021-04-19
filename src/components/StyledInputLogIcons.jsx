// import React from 'react';
import styled from 'styled-components';

export const WrapperImg = styled.div`
  display: ${(props) => (props.visibility ? 'block' : 'none')};
  flex:row;
  // img {
  //   width:40px;
  // }
 
`;

export const Wrapper2 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
