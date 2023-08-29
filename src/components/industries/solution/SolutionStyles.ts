import { styled } from "styled-components";
export interface CardProp {
  bgColor?: string;
}
export const SolutionWrapper = styled.div`
  width: 100%;
  background-color: #000;
  padding: 86px 143px 130px 143px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 80px 0 70px 0;
  }
`;

export const Subtile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #a5afbc;
  font-family: Mazzard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 27.56px */

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 80%;
    margin: 0 auto;
    text-align: start;
  }
`;

export const SolutionTitle = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 86px;
  font-style: normal;
  font-weight: 500;
  line-height: 109.8%; /* 94.428px */
  margin-bottom: 90px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 68.8px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const ContainerOfSolution = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;
`;

export const Card = styled.div<CardProp>`
  width: 487px;
  height: 320px;
  padding: 26px 30px;
  border: 1px solid #646464;
  background-color: ${(prop) => prop.bgColor};
`;

export const Title = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 109.8%; /* 37.332px */
  margin-bottom: 10px;
`;

export const Content = styled.div`
  color: #a5afbc;
  font-family: Mazzard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 27.56px */
`;
