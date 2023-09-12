import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const BoxMenuFirstWrapper = styled.div<BreacPointsType>`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 90%;
  }
`;

export const BoxMenuFirstFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const BoxMenuFirstValue = styled.p<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;
