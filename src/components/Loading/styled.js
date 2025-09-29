import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: rgba( 0 , 0 ,0 , 0.8);
  }

  span{
    z-index: 2;
  }
`
