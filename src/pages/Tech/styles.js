import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  gap: 10px;
  input {
    border: 1px solid var(--blue);
  }
  select {
    background-color: aliceblue;
    padding: 0.5rem;
  }
  button {
      align-self: center;
  }
`;
