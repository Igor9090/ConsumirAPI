import styled from 'styled-components';
import { colors } from "../../config/colors"

import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  .aluno-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;


    &:last-child {
      border-bottom: none;
    }
  }

  .aluno-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 20px;
  }

  .aluno-nome {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .aluno-email {
    color: #666;
    font-size: 14px;
  }

  .deleteExclamation{
    color: ${colors.errorDark};
  }

  .deleteExclamation:hover{
    transform: scale(1.1);
  }

  .aluno-actions {
    display: flex;
    gap: 15px;

    a {
      color: ${colors.beige};
      transition: 0.5s all;

      .edit:hover {
        color: ${colors.info};
        transform: scale(1.1);
      }

      .delete:hover{
        color: ${colors.error};
        transform: scale(1.1);
      }
      }
    }
`;

export const ProfilePicture = styled.div`
  img, svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  color: ${colors.info};
  font-weight: bolder;
  cursor: pointer;
  margin: 20px 0;
  transition: 0.5s all;

  &:hover{
    font-size: 1.1em;
    text-decoration: underline;
  }
`
