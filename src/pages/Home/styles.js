import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    height: 100%;
    max-height: 500px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
  button + button {
    margin-top: 0.3rem;
  }
`;
