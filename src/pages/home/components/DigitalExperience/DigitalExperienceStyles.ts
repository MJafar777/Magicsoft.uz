import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";
import { vektorBorder } from "../../../../assets/images";

export const DigitalExperienceWrapper = styled.section<BreacPointsType>`
  height: 100vh;
  max-width: 1652px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
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
  max-width: 485px;
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
`;

export const DigitalExperienceRightBorder = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 627px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${vektorBorder});
`;
