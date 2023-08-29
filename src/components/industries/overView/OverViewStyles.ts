import { styled } from "styled-components";

export const OverViewWraper = styled.div`
  height: fit-content;
  padding-left: 230px;
  background-color: #111114;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const OverViewTitle = styled.div`
  color: #fff;
  text-align: start;
  font-family: Mazzard;
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 109.8%;
  padding-bottom: 94px;
  padding-top: 58px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 68.8px;
    padding-bottom: 74px;
    display: flex;
    justify-content: center;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 48.16px;
    padding-bottom: 52px;
    text-align: center;
  }
`;

export const TextOfOverView = styled.div`
  color: #a5afbc;
  text-align: justify;
  font-family: Mazzard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  padding: 0 387px 122px 157px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
    padding: 0;
    padding-bottom: 74px;
    margin: 0 auto;
    width: 70%;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 11.2px;
    padding: 0;
    width: 60%;
  }
`;
