import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

// breakpoints: {
//   sm: "screen and (max-width: 576px)",
//   md: "screen and (max-width: 768px)",
//   lg: "screen and (max-width: 992px)",
//   xl: "screen and (max-width: 1200px)",
//   xxl: "screen and (max-width: 1440px)",
// }

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
  max-width: 1281px;
  background-color: #080909;
`;
export const Brecked = styled.div`
  margin: 20px auto;
  background-color: #080909;
`;
