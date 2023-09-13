import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const DigitalExperienceContainerWrapper = styled.section<BreacPointsType>`
  max-width: 1500px;
  padding: 0 20px;
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
    margin-bottom: 30px;
  }
`;

export const DigitalExperienceWrapper = styled.section<BreacPointsType>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xxl} {
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 100px auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column-reverse;
    min-height: auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const DigitalExperienceLeft = styled.div<BreacPointsType>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 100;
  width: 50%;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const DigitalExperienceTitle = styled.h2<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 98.298px;
  margin-top: 7px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 68.8px;
    font-weight: 600;
    line-height: 78.638px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 48.8px;
    font-weight: 600;
    line-height: 55.638px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 42.8px;
    font-weight: 600;
    line-height: 48.638px;
  }
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

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.048px;
    margin-bottom: 20px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 12px;
    line-height: 15.048px;
    margin-bottom: 15px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-size: 12px;

    p:nth-child(1) {
      margin-bottom: 18px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    max-width: 470px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
`;

export const DigitalExperienceRight = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  transition: all 0.3s;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90%;
  }
`;

export const DigitalExperienceVideContainer = styled.div<BreacPointsType>`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border-radius: 30px;
  width: 80%;
  padding: 20px;
  transition: all 0.3s;

  &:hover {
    padding: 0;
    border: 0px;
  }

  video {
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    border-radius: 20px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 0;
    border: none;

    video {
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export const DigitalExperienceItem = styled.div<BreacPointsType>``;
