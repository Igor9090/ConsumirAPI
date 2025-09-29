import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css'
import { colors } from '../config/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nata+Sans:wght@100..900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
   font-family: "Nata Sans", sans-serif;
   background-color: ${colors.light};
  }

  html, body , #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    margin: 20px;
    padding: 10px 20px;
    background-color: ${colors.medium};
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    transition: all 300ms;
  }

  button:hover {
    filter: brightness(85%);
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 60%;
  margin: 30px auto;
  padding: 30px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0 ,0 ,0 , 0.1)
`;
