import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;

  div:first-child {
    margin-top: -100px;
    margin-bottom: 100px;
    color: white;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;
