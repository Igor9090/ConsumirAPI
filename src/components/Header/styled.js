import styled from 'styled-components';
import { colors } from '../../config/colors';

export const Header = styled.header`
  background-color: ${colors.dark};
  padding: 20px;
  color: white;

  nav {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  .user-info{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .custom-link {
    text-decoration: none;
    color: white;
  }

  .custom-link:hover {
  }

  .alunos{
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.5s all;
  }

  .alunos:hover{
    color: ${colors.info};
    transform: scale(1.1);
    font-weight: 700;
  }

  .logoutLink{
    display: flex;
    align-items: center;
    color: ${colors.error};
    transition: 0.5s all;
  }

  .logoutLink:hover {
    color: ${colors.errorDark};
    transform: scale(1.3)
  }

  .nome{
    text-decoration: underline;
    color: ${colors.info};
  }

  .auth-links{
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .loginLink{
     transition: 0.5s all;
  }

  .loginLink:hover{
    color: ${colors.info};
    transform: scale(1.1);
    font-weight: 700;
  }

  .registerLink{
    background-color: ${colors.info};
    padding: 10px;
    border-radius: 30px;
    transition: 0.5s all;
  }

  .registerLink:hover{
    transform: scale(1);
    font-weight: 700;
  }
`;
