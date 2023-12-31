import styled from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const FooterWrapper = styled.div<BreacPointsType>`
  width: 90%;
  height: 338px;
  display: flex;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 1366px;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 0;
  }
`;

export const ChildWrapper = styled.div<BreacPointsType>`
  width: 100%;
  height: 338px;
  background-color: transparent;
`;
