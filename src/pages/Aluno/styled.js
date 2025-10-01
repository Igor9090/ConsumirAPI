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
    }

    input {
      height: 28px;
      padding: 10px;
      font-size: 16px;
    }

    button {
      width: 30%;
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 20px;
  position: relative;
  margin: top;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: absolute;
    bottom: 0;
    width: 36px;
    height: 36px;
    color: white;
    background-color: ${colors.info};
    padding: 5px;
    border-radius: 50%;
  }

  @media (max-width: 520px) {
    padding: 0 0 0 10px;

    img {
      height: 90px;
      width: 90px;
      border-radius: 50%;
      margin: 20px;
      object-fit: cover;
    }
  }
`;
