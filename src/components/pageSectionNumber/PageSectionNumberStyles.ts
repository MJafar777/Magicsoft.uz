import { styled } from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const PageSectionNumberWrapper = styled.div<BreacPointsType>`
  max-width: 90px;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    background-color: #1b63cc;
    margin-right: 8px;
  }

  p {
    color: #aab4c2;
    font-family: "Concretica";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -4px;
  }

  h4 {
    color: #aab4c2;
    font-family: "MazzardM-Semibold";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -4px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    p,
    h4 {
      font-size: 16px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    p,
    h4 {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    p,
    h4 {
      font-size: 12px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
