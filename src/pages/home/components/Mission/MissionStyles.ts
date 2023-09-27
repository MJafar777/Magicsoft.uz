import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const MissionContainerWrapper = styled.section<BreacPointsType>`
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
    padding-top: 40px;
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
`;

export const MissionWrapper = styled.section<BreacPointsType>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;

  .mobile-title {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1440px;
    padding: 0 20px;
    margin: 0px auto;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1200px;
    margin: 100px auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 992px;
    margin: 50px auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 768px;
    margin: 0px auto;

    display: flex;
    min-height: auto;
    flex-direction: column-reverse;

    .mobile-title {
      display: inline-block;
      text-align: center;
    }

    .desctop-title {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 576px;
  }
`;

export const MissionLeft = styled.div<BreacPointsType>`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;
  z-index: 100;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const MissionTitle = styled.h2<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 98.298px;
  margin-top: 7px;

  span {
    color: #d4f54c;
  }

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

export const MissionDescription = styled.div<BreacPointsType>`
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
    max-width: 340px;
  }
`;

export const MissionRightContaner = styled.div<BreacPointsType>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;

export const MissionRight = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  transition: all 3s;
  transform: scale(1.3);

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    z-index: -1;
    overflow: clip;
    top: 0;
    right: 0;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    transform: scale(1.3);
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
    transform: scale(1);
    align-items: center;
    justify-content: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    transform: scale(1.3);
  }
`;

export const MissionVideContainer = styled.div<BreacPointsType>`
  opacity: 1;
  position: absolute;
  z-index: -200;
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  border-radius: 2.5em;
  width: 100%;
  height: 100%;
  padding: 10px;

  video {
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    z-index: -100;
    transform: translateX(-80px);

    @media ${(props) => props.theme.breakpoints.xxl} {
    }

    @media ${(props) => props.theme.breakpoints.xl} {
      transform: translateX(0px);
      width: 78%;
      margin-right: 50px;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 100%;
      margin-right: 0px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    align-items: center;
    justify-content: center;
  }
`;

export const MissionItem = styled.div<BreacPointsType>``;
