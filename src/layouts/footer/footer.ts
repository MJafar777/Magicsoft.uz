import styled from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const FooterWrapper = styled.div`
  height: 338px;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChildWrapper = styled.div<BreacPointsType>`
  width: 100%;
  height: 338px;
  background-color: transparent;
`;
