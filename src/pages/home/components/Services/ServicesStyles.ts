import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const ServicesContainerWrapper = styled.section<BreacPointsType>`
  max-width: 1500px;
  padding: 0 20px;
  padding-top: 111px;
  min-height: 787px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    max-width: 1201px;
    min-height: 630px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;
    padding: 0px 20px;
    max-width: 993px;
    min-height: 441px;
    height: auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 768px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 50px auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 50px auto;
  }
`;

export const ServicesWrapper = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1440px;
    padding: 0px;
    margin: 0px auto;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1200px;
    margin: 60px auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 992px;
    margin: 10px auto;
    margin-bottom: 60px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 768px;
    height: auto;
    margin-bottom: 0px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 576px;
  }
`;

export const ServicesLeft = styled.div<BreacPointsType>`
  width: 50%;

  .servicesLeft-title-row {
    display: flex;
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 45%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    justify-content: center;
  }
`;

export const ServicesLeftTitle = styled.h2<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-weight: 600;
  line-height: 98.298px;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 68.8px;
    font-weight: 600;
    line-height: 78.638px;
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 48.8px;
    font-weight: 600;
    line-height: 55.638px;
    margin-bottom: 0px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42.8px;
    font-weight: 600;
    line-height: 48.638px;
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const ServicesLeftItem = styled.div<BreacPointsType>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  border-bottom: 2px solid #646464;
  padding: 42px 18px 18px 0;
  transition: all 0.3s;

  &:hover {
    border-color: #fff;

    h2,
    p {
      color: #fff;
    }
  }

  .yellovNumber {
    background-color: #d4f54c;

    p {
      color: black;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 15px 15px 15px 0;
    gap: 13px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 10px 8px 8px 0;
    gap: 9px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding: 18px 8px 10px 0;
  }
`;

export const ServicesLeftItemNumber = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #1b63cc;
  border-radius: 50%;
  padding: 7px 8px 4px 8px;

  p {
    color: #fff;
    font-family: "Concretica";
    font-size: 18px;
    font-weight: 400;
    line-height: 15.75px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 6px 7px 3px 7px;

    p {
      font-size: 14.4px;
      font-weight: 400;
      line-height: 12.6px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 5px 6px 2px 6px;

    p {
      font-size: 10.08px;
      font-weight: 400;
      line-height: 8.82px;
    }
  }
`;

export const ServicesLeftItemTitle = styled.h2<BreacPointsType>`
  color: #aab4c2;
  font-family: "MazzardM-Medium";
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 29.75px;
  margin-bottom: 18px;
  transition: all 0.3s;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 27.2px;
    line-height: 23.8px;
    margin-bottom: 10px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 19.04px;
    line-height: 16.66px;
    margin-bottom: 10px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-bottom: 15px;
  }
`;

export const ServicesLeftItemDescription = styled.p<BreacPointsType>`
  color: #aab4c2;
  font-family: "MazzardM-Medium";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: all 0.3s;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 19.2px;
    line-height: 19.2px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 13.44px;
    line-height: 13.44px;
  }
`;

export const ServicesLeftItemBtn = styled.div<BreacPointsType>`
  margin-top: 52px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 30px;
    margin-top: 10px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const ServicesRight = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding-left: 20px;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 55%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;

export const ServicesRightImageBox = styled.div<BreacPointsType>`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 100%;
  border-radius: 30px;
  transition: all 0.3s;

  img.gif {
    width: 100%;
    transition: all 0.3s;
    border-radius: 30px;
  }

  &:hover {
    border: none;
    padding: 0;

    img.gif {
      border-radius: 2px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    img.gif {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    img.gif {
      border-radius: 25px;
    }
  }
`;
