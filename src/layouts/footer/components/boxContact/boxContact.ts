import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const BoxContactWrapper = styled.div<BreacPointsType>`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 90%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;

export const BoxContactTitle = styled.p<BreacPointsType>`
  color: #fff;
  font-family: Archivo-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  opacity: 0.5;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;
export const BoxContactValue = styled.p<BreacPointsType>`
  color: #fff;
  font-family: Archivo-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  margin-bottom: 5px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;
export const BoxContactFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
