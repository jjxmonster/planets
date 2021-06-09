import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  body{
    font-family: 'Trispace', sans-serif;
  }
  #tsparticles {
    position: absolute;
    background-color: rgb(0, 1, 51);
    width: 100vw;
    height: 100vh;
    z-index:-50;
 }
  button{
    cursor:pointer;
    border:0;
    background:transparent;
    outline:none;
  }
  ul{
    list-style:none;
  }
 
`;
