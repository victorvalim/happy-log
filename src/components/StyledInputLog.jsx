import styled from 'styled-components';

export const Wrapper = styled.div`
color:#555153;
opacity:0,4;
display:flex;
flex-direction:column;
flex-wrap: nowrap;
align-items:center;
background: #f8d4b0;
display: ${(props) => (props.visibility ? 'flex' : 'none')};
  div {

    width:50vw;
    display:flex;
    justify-content:space-evenly;
  }

  button {
    display:inline-block;
  }
`;

export const Wrapper2 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
