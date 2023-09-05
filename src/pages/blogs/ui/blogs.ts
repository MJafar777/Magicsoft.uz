import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const NewsWrapper = styled.div<BreacPointsType>`
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  background-color: #080909;
  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 0 20px;
  }
`;

export const ChildWrapper = styled.div`
  color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1281px;
  background-color: #080909;
`;

export const Brecked = styled.div`
  margin: 20px auto;
  background-color: #080909;
`;
