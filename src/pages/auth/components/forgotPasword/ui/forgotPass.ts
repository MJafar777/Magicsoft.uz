import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 95vh;

  color: #fff;
  background-color: #000;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  gap: 30px;
  width: 100%;
  display: flex;
  max-width: 300px;
  margin: 20px auto;
  flex-direction: column;
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  padding: 10px;
  display: block;
  cursor: pointer;
  font-weight: 500;
  user-select: none;
  border-radius: 8px;
  background-color: #1b63cc;
`;

export const Input = styled.input`
  color: white;
  padding: 10px;
  outline: none;
  display: block;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::selection {
    background: rgba(255, 255, 255, 0.2);
    color: black;
  }
`;

