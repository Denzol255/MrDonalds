import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }
  
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
  }
  h1, h2, h3{
    font-family: Pacifico;
  }
  button{
    cursor: pointer;
    outline: none;
  }
  input, button{
    font: inherit;
  }
  input[type='number']{
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
`;
