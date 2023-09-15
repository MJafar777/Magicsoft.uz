import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

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

export const Title = styled.div<BreacPointsType>`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-align: start;
  font-style: normal;
  line-height: 109.8%;
  font-family: Mazzard, sans-serif;

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

export const InputPassword = styled.input`
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  background-color: transparent;

  &::selection {
    color: black;
    background: #fff;
  }
`;

export const EyeFlex = styled.div`
  display: flex;
  user-select: none;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ImgEye = styled.img`
  width: 20px;
  cursor: pointer;
  user-select: none;
  margin-right: 5px;
`;

export const FlexAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
`;
export const RegisterPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CenterBtn = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
