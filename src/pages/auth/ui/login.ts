import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 95vh;
  background-color: #000;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div<BreacPointsType>`
  color: #fff;
  text-align: start;
  font-family: Mazzard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 109.8%;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 22px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 30px;
  width: 100%;
  margin: 20px auto;
`;
export const Button = styled.button`
  display: block;
  border-radius: 8px;
  padding: 10px;
  background-color: #1b63cc;
  border: none;
  color: #fff;
  font-weight: 500;
`;
export const Input = styled.input`
  display: block;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;

  &::selection {
    background: #fff;
    color: black;
  }
`;
export const InputPassword = styled.input`
  display: block;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: none;
  color: white;

  &::selection {
    background: #fff;
    color: black;
  }
`;

export const EyeFlex = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  user-select: none;
`;
export const ImgEye = styled.img`
  width: 20px;
  margin-right: 5px;
  cursor: pointer;
  user-select: none;
`;
