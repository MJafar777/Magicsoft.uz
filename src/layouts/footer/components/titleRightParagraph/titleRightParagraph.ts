import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const TitleRightParagraphWrapper = styled.p<BreacPointsType>`
  color: #fff;
  text-align: justify;
  font-family: MazzardH-Medium, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 26px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 22px;
    /* width: 45%; */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    display: block;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;
