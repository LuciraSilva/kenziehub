import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  form {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    input {
      border: 1px solid var(--blue);
    }
    select {
      background-color: aliceblue;
      padding: 0.5rem;
    }
    button {
      margin: 5px auto 0 auto;
    }
    span {
      color: red;
    }
  }
`;
