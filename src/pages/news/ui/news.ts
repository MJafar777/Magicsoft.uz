import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const NewsWrapper = styled.div<BreacPointsType>`
  width: 100%;
  margin: 0 auto;
  background-color: #080909;
  @media ${(props) => props.theme.breakpoints.xxl} {
    /* padding: 0 20px; */
    margin-top: 0px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    /* margin-top: 80px; */
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    /* margin-top: 60px; */
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    /* margin-top: 40px; */
  }
`;
export const ChildWrapper = styled.div`
  color: #fff;
  margin: 0 auto;
  background-color: #080909;
`;
export const Brecked = styled.div`
  margin: 20px auto;
  background-color: #080909;
`;
