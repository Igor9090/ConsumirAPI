import styled from 'styled-components';
import { colors } from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .button {
    display: flex;
    justify-content: end;
    margin: 0;
  }

  button {
    width: 15%;
    padding: 10px;
    margin: 0;
  }

  input {
    height: 35px;
    border: 1px solid ${colors.medium};
    border-radius: 4px;
    font-size: 18px;
    padding: 0 10px;
    margin-top: 5px;

    &:focus {
      border: 2px solid ${colors.dark};
    }
  }

  @media (max-width: 520px) {
    label {
      margin-bottom: 15px;
      font-size: 15px;
    }

    input {
      height: 28px;
      padding: 10px;
      font-size: 16px;
      margin-top: 5px;
    }

    button {
      width: 35%;
    }
  }
`;
