import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const TitleBlockWrapper = styled.h2`
  width: 100%;
  margin: 2rem auto;
`;
export const Title = styled.div<BreacPointsType>`
  color: #fff;
  text-align: start;
  font-family: Mazzard, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 109.8%;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 56px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 48px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 32px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;
