import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const AllProjectsWrapper = styled.div<BreacPointsType>`
  width: 100%;
  margin: 0rem auto;
  margin-bottom: 20px;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 80px;
  }
`;
export const SubTitle = styled.h2<BreacPointsType>`
  color: #fff;
  font-family: Mazzard, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  margin: 20px auto;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 68.8px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 68.8px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 48.16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42px;
  }
`;
