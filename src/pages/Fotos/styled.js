import styled from "styled-components";
import { colors } from "../../config/colors"

export const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 2em;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border: 3px solid ${colors.beige};
  border-radius: 50%;
  margin: 30px auto;
  cursor: pointer;
  transition: 0.6s all;

  &:hover{
    transform: scale(1.1);
  }

  input{
    display: none;
  }

  img{
    width: 180px;
    height: 180px;
    object-fit: cover;
  }
`
