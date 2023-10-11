import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-width: 40rem;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  color: #333;

  outline: none; // remove o contorno ao clicar no input
`;

export const Button = styled.button`
  background-color: #4caf50;
`;
