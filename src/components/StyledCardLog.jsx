// import React from 'react';
import styled from 'styled-components';

export const WrapperCard = styled.div`
display:flex;
display-direction:row;
flex-wrap: wrap;
height: 100vh;
align-content:flex-start;

`;

export const Card = styled.div`
outline: none !important;
color:#080910;
border-color: #AF8C79;
box-shadow: 0 0 1vw #AF8C79;
display:flex;
display-direction:row;
flex-wrap: wrap;
justify-content:space-between;
width:23vw;
height:20vh;
background-color: #FF4D2D;
opacity:0.4;
margin:10px;
color:#080910;

`;

export const CardDown = styled.div`

margin:0;
padding:0;
display:inline-block;
width:23vw;
height:15vh;



overflow-x:hidden;
overflow-y:scroll;
::-webkit-scrollbar{
  display:none;
  width:0px;
  background:transparent;
}

h3{

  // padding:1px;
  // background-color:blue;

}
`;
export const CardLeft = styled.div`
margin:0;
padding:0;
display:inline;
height:4vh;
h4{
  margin:0;
padding:0;
width:15vw;
}
`;

export const CardRigth = styled.div`
display:inline-block;
opacity:0.5;
img{
  height:4vh;
}

`;
