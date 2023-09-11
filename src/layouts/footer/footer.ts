import styled from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 338px;
  margin-top: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChildWrapper = styled.div<BreacPointsType>`
  width: 100%;
  height: 338px;
  max-width: 1200px;
  background-color: transparent;
  margin: 0 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 5px;
  }
`;
