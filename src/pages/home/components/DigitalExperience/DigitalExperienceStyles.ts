import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const DigitalExperienceWrapper = styled.section<BreacPointsType>`
  min-height: 627px;
  max-width: 1652px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 150px auto;
`;

export const DigitalExperienceLeft = styled.div<BreacPointsType>`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DigitalExperienceTitle = styled.h2<BreacPointsType>`
  max-width: 634px;
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 98.298px;
  margin-top: 7px;
`;

export const DigitalExperienceDescription = styled.div<BreacPointsType>`
  max-width: 600px;
  color: #a5afbc;
  font-family: "MazzardM-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.56px;
  margin-bottom: 50px;

  p:nth-child(1) {
    margin-bottom: 24px;
  }
`;

export const DigitalExperienceRight = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  img {
    position: absolute;
    z-index: 3;
    overflow-clip-margin: content-box;
    overflow: clip;
    position: absolute;
    top: -13%;
    right: 0;
    bottom: 0;
    z-index: 3;
  }
`;

export const DigitalExperienceVideContainer = styled.div<BreacPointsType>`
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
  border-radius: 2.5em;

  video {
    background-size: cover;
    background-position: center;
    object-fit: cover;
    z-index: -100;
    transform: translateX(-100px);
  }
`;

export const DigitalExperienceItem = styled.div<BreacPointsType>``;
