import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const FooterTopWrapper = styled.div<BreacPointsType>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
  }
`;
