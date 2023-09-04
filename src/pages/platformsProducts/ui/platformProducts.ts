import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const PlatformProductsWrapper = styled.div<BreacPointsType>`
  color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  max-width: 1652px;
  background-color: #080909;
  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 0 20px;
  }
`;
