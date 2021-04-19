// import React from 'react';
import styled from 'styled-components';

export const WrapperCard = styled.div`
display:flex;
display-direction:row;
flex-wrap: wrap;
justify-content:space-around;
height:100vh;

`;

export const Card = styled.div`
display:flex;
display-direction:row;
width:23vw;
border: 1px solid black;
height:20vw;

`;

export const CardLeft = styled.div`
display:flex;
width:12vw;
height:14vw;
background-color:blue;


h3{
  background-color:blue;
}
`;

export const CardRigth = styled.div`
width: 8vw;
`;
