import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const ServicesWrapper = styled.section<BreacPointsType>`
  height: 100vh;
  max-width: 1571px;
  margin: 300px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const ServicesLeftItemDescription = styled.p<BreacPointsType>`
  color: #aab4c2;
  font-family: "MazzardM-Medium";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: all 0.3s;
`;

export const ServicesLeftItemBtn = styled.div<BreacPointsType>`
  margin-top: 52px;
`;

export const ServicesRight = styled.div<BreacPointsType>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  height: 100%;

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
`;

export const ServicesRightPageNumber = styled.div<BreacPointsType>`
  position: absolute;
  right: 0;
  bottom: 0px;
`;
