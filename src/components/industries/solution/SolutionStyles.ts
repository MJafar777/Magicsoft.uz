import { styled } from "styled-components";
export interface CardProp {
  bgColor?: string;
}
export const SolutionWrapper = styled.div`
  width: 100%;
  background-color: #000;
  padding: 86px 5% 130px 288px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 80px 0 70px 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
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
  margin-bottom: 30px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    display: none;
  }
`;

export const SolutionTitle = styled.div`
  color: #fff;
  font-family: "MazzardM-Medium";
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
    margin-bottom: 70px;
    padding-left: 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 48.16px;
    padding-bottom: 52px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 42.16px;
    padding-bottom: 42px;
    margin-bottom: 30px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 32.16px;
    padding-bottom: 32px;
    margin-bottom: 0;
  }
`;

export const ContainerOfSolution = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  /* gap: 2px; */
`;

export const Card = styled.div<CardProp>`
  width: 30%;
  height: 320px;
  padding: 1% 1.5%;
  border: 1px solid #646464;
  background-color: ${(prop) => prop.bgColor};

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 390px;
    height: 256px;
    padding: 26px 30px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 300px;
    height: 165px;
    padding: 26px 30px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-family: "MazzardM-Medium";
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 109.8%; /* 37.332px */
  margin-bottom: 10px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 27.2px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 17.2px;
  }
`;

export const Content = styled.div`
  color: #a5afbc;
  font-family: "MazzardM-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 27.56px */

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 10.08px;
  }
`;
