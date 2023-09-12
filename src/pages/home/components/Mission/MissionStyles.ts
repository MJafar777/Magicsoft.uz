import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const MissionWrapper = styled.section<BreacPointsType>`
  min-height: 627px;
  max-width: 1652px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  /* margin: 150px auto; */
  margin: 0px auto;

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1440px;
    padding: 0 20px;
    /* margin: 150px auto; */
    margin: 0px auto;
    min-height: 627px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1200px;
    margin: 100px auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 992px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 768px;
    display: flex;
    min-height: auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 576px;
  }
`;

export const MissionLeft = styled.div<BreacPointsType>`
  display: flex;
  flex-direction: column;
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
  max-width: 634px;
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

export const MissionRight = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  transition: all 0.3s;

  img {
    transition: all 0.3s;
    position: absolute;
    z-index: -1;
    overflow-clip-margin: content-box;
    overflow: clip;
    position: absolute;
    top: -13%;
    right: 0;
    bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 396px;
    top: 0px;

    img {
      top: 60px;
      width: 656px;
      right: -150px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 356px;

    img {
      top: 120px;
      width: 456px;
      right: -50px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const MissionVideContainer = styled.div<BreacPointsType>`
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  opacity: 1;
  position: absolute;
  z-index: -1;
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

    @media ${(props) => props.theme.breakpoints.xxl} {
      transform: translateX(0px);
    }

    @media ${(props) => props.theme.breakpoints.xl} {
      width: 330px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 410px;
    height: 305px;
    top: 178px;
    right: -20px;
    border-radius: 10px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 356px;
    top: 138px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const MissionItem = styled.div<BreacPointsType>``;
