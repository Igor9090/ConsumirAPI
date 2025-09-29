import styled from "styled-components";
import { colors } from "../../config/colors"

export const Title = styled.header`
  background-color: ${colors.dark};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  div {
    display: flex;
    gap: 10px;
  }
`
