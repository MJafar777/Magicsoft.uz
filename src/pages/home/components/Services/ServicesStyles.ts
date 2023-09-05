import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const ServicesWrapper = styled.section<BreacPointsType>`
  height: 100vh;
  max-width: 1571px;
  margin: 300px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1440px;
    padding: 0 20px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1200px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 992px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 768px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 576px;
  }
`;

export const ServicesLeft = styled.div<BreacPointsType>`
  width: 50%;
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
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 48.8px;
    font-weight: 600;
    line-height: 55.638px;
    margin-bottom: 30px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42.8px;
    font-weight: 600;
    line-height: 48.638px;
    margin-bottom: 25px;
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
    padding: 30px 15px 15px 0;
    gap: 13px;
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
`;

export const ServicesLeftItemBtn = styled.div<BreacPointsType>`
  margin-top: 52px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ServicesRight = styled.div<BreacPointsType>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  height: 100%;
  padding: 0;

  position: relative;
`;

export const ServicesRightImageBox = styled.div<BreacPointsType>`
  position: relative;

  img {
    position: absolute;
  }

  img.gifBorderVector {
    top: 140px;
    right: 0;
  }

  img.gif {
    width: 580px;
    top: 250px;
    right: 50px;
    bottom: 0px;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
    position: absolute;
    z-index: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 50px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    img.gifBorderVector {
      width: 550px;
      top: 50px;
      right: 0;
    }

    img.gif {
      width: 460px;
      top: 150px;
      right: 43px;
      border-radius: 40px;
    }
  }
`;
