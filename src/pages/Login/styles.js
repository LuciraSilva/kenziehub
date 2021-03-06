import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  form {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    input {
      border: 1px solid var(--blue);
    }
    button {
      margin: 5px auto 0 auto;
    }
  }
  @media (min-width: 768px){
    input {
      width: 200px;
    }
  };
`;
