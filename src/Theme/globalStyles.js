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
 a{
     color:white;
     text-decoration:none;
 }
  table{
   flex:8;
    color: white;
    font-size: 2vh;
  }
 
`;
