import { styled } from "styled-components";

interface InovationNameProp {
  active: boolean;
}

export const TechnologyWrapper = styled.div`
  background: #000;
  padding-top: 150px;
  padding-bottom: 128px;
  width: 80%;
  margin: 0 auto;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleInovation = styled.div`
  color: #fff;
  text-align: start;
  font-family: Mazzard;
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 109.8%;
  padding-left: 5%;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 68.8px;
    padding: 0;
    padding-top: 120px;
    padding-bottom: 74px;
    display: flex;
    justify-content: center;
    padding-left: 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 48.16px;
    padding-bottom: 52px;
    text-align: center;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 42.16px;
    padding-bottom: 42px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 32.16px;
    padding-bottom: 22px;
  }
`;

export const ContainerInovationSkils = styled.div`
  padding-top: 94px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InovationSkil = styled.div`
  width: 970px;
  margin-bottom: 30px;
  margin-left: 20%;
  transition: 30s linear all;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 776px;
    margin-bottom: 30px;
    margin-left: 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 100%;
    margin-bottom: 20px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    margin-bottom: 10px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    margin-bottom: 5px;
  }
`;

export const InovationName = styled.div<InovationNameProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px;
  color: #fff;
  font-family: Mazzard;
  font-size: 58px;
  font-weight: 400;
  letter-spacing: 1.16px;
  border-bottom: 1px white solid;
  margin-bottom: 18px;
  transition: all 1s linear;
  gap: ${(prop) => (!prop.active ? "0" : "30px")};

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 46.4px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 42.16px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 28.16px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const InovationInfo = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 27.56px */
  width: 70%;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 11.2px;
  }
`;
