import styled from 'styled-components';
import { colors } from "../../config/colors"
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  .aluno-item {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }

  .aluno-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .aluno-nome {
    font-weight: bold;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .aluno-email {
    color: #666;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    align-items: center;

    a {
      color: ${colors.beige};
      transition: 0.5s all;
      display: flex;
      align-items: center;

      .edit{
        height: 16px;
        width: 16px;
      }

      .edit:hover {
        color: ${colors.info};
        transform: scale(1.1);
      }

      .delete{
        height: 16px;
        width: 16px;
      }

      .delete:hover{
        color: ${colors.error};
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 520px){
    .aluno-item{
      grid-template-columns: 40px 1fr auto;
      gap: 10px;
      padding: 12px 0;
    }

    .aluno-nome{
      font-size: 13px;
    }

    .aluno-email{
      font-size: 11px;
    }

    .aluno-actions {
      gap: 10px;
        a {

      .edit{
        height: 9px;
        width: 9px;
      }

      .delete{
        height: 9px;
        width: 9px;
      }
    }
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;

  img, svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }


  svg {
    min-width: 50px;
    min-height: 50px;
  }

  @media (max-width: 520px){
    width: 35px;
    height: 35px;

    svg {
      min-width: 35px;
      min-height: 35px;
    }
  }
`

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

  @media (max-width: 520px){
    font-size: 14px;
    margin: 15px 0;
  }
`
