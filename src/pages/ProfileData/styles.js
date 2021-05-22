import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    align-self: flex-start;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    h2 {
      align-self: initial;
    }
  } ;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 10px var(--blue);
  height: 100%;
  max-height: 400px;
  padding: 1rem;
  span {
    font-weight: 700;
  }
  ul li {
    margin-left: 10px;
  }
  button {
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    max-height: 350px;
    width: 500px;

    button {
      margin-top: 5rem;
      align-self: flex-end;
    }
  }; 
`;