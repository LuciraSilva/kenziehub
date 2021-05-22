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
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    > div {
      max-height: 100%;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    div:first-child {
      margin-top: 0;
      margin-bottom: 0;
      color: black;
    }
    button + button {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`;
