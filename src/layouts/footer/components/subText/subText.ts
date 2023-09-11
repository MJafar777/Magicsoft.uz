import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const SubTextWrapper = styled.div`
  width: 40%;
`;

export const Paragraph = styled.p<BreacPointsType>`
  color: #fff;
  font-family: Archivo-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  opacity: 0.6;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
