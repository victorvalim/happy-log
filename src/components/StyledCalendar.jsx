import styled from 'styled-components';

export const WrapperSides = styled.div`
position:fixed;
display:flex;
flex-direction:row;
width:100vw;
max-height:100%;

`;

export const WrapperRigth = styled.div`
width:50vw;
max-height:100%;

// position:fixed;
z-index:1;
padding-top:20px;
top:0;
  img{
    width:40px;
  }
`;

export const WrapperLeft = styled.div`
width:50vw;
max-height:100%;

z-index:1;
overflow-x:hidden;
padding-top:20px;
top:0;
`;

export const Wrapper2 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
