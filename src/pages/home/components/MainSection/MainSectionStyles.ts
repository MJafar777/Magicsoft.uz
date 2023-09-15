import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const MainSectionWrapper = styled.div<BreacPointsType>`
  max-width: 1500px;
  padding: 0 20px;
  height: calc(100vh - 111px);
  margin: 0 auto;
  min-height: 787px;

  .mainSectionMobileBox {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    padding: 0px;
    max-width: 1440px;
    min-height: 630px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;
    padding: 0px;
    max-width: 992px;
    min-height: 441px;
    height: auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 768px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin-bottom: 30px;

    .mainSectionMobileBox {
      display: inline-block;
    }

    .mainSectionDesctopBox {
      display: none;
    }
  }
`;

export const MainSectionContainer = styled.section<BreacPointsType>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111114;
  margin: 40px auto;
  padding: 90px 135px 54px 135px;
  border-radius: 48px 48px 0px 0px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    border-radius: 0;
    margin: 0 auto;
    padding: 20px 105px 20px 105px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 auto;
    padding: 77px 40px 77px 40px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 37px 40px 27px 40px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: transparent;
    padding: 0;
  }
`;

export const MainSectionLeft = styled.div<BreacPointsType>``;

export const MainSectionLeftTitle = styled.h2<BreacPointsType>`
  max-width: 770px;
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-weight: 600;
  line-height: 100px;
  margin: 40px 0;

  .MainSectionLeftTitleYellow {
    text-decoration: underline;
    text-decoration-color: #d4f54c;
  }

  .MainSectionLeftTitleGreen {
    text-decoration: underline;
    text-decoration-color: #1b63cc;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 760px;
    font-size: 68.8px;
    font-weight: 600;
    line-height: 78.638px;
    margin: 30px 0;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 460px;
    font-size: 48.8px;
    line-height: 55.638px;
    margin: 20px 0;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 460px;
    font-size: 48.8px;
    line-height: 55.638px;
    margin: 20px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 438px;
    font-size: 42px;
    line-height: 48.638px;
    margin: 20px 0;
  }
`;

export const MainSectionLeftDescription = styled.p<BreacPointsType>`
  color: #a5afbc;
  font-family: "MazzardM-Regular";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  max-width: 565px;
  padding-bottom: 20px;
  margin-bottom: 40px;

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

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 270px;
    margin: 0 auto;
    font-size: 12px;
  }
`;

export const MainSectinLeftButtonsBox = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  gap: 26px;

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 18px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const MainSectionRight = styled.section<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
  }
`;

export const MainSectionAnimation = styled.section<BreacPointsType>`
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  opacity: 1;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  color: white;
  width: 249px;
  height: 633px;
  mix-blend-mode: lighten;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: 50% 50%;
    position: absolute;
    margin: auto;
    width: 100%;
    height: 100%;
    right: -100%;
    bottom: -100%;
    top: -100%;
    left: -100%;
    object-fit: cover;
    z-index: -100;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 533px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    height: 400px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    height: 355px;
    width: 140px;
  }
`;
