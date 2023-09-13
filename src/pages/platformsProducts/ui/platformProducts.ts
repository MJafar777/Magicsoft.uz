import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const PlatformProductsWrapper = styled.div<BreacPointsType>`
  width: 100%;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 0 20px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 80px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 60px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 40px;
  }
`;
