import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const OurCommunityCotainerWrapper = styled.section<BreacPointsType>`
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
    margin: 50px auto;
    padding-top: 0px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 50px auto;
  }
`;
export const OurCommunityWrapper = styled.section<BreacPointsType>`
  max-width: 1163px;
  margin: 0px auto;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 20px auto;
  }
`;

export const OurCommunityPageNumber = styled.div<BreacPointsType>`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const OurCommunityTitle = styled.div<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 98.298px;
  margin-top: 17px;
  margin-bottom: 52px;
  text-align: center;

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
    margin-bottom: 12px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42.8px;
    font-weight: 600;
    line-height: 48.638px;
    margin-bottom: 0px;
  }
`;

export const OurCommunityCards = styled.div<BreacPointsType>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 25px;
  padding: 10px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 14px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const OurCommunityCard = styled.div<BreacPointsType>`
  border-radius: 25px;
  background-color: #1b63cc;
  z-index: 2;
  transition: background-color 0.8s;
  position: relative;

  .cardArrowIcon {
    opacity: 0;
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: white;
    transition: opacity 0.3s;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;

    h2 {
      left: 18px;
    }

    .cardArrowIcon {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    border-radius: 20px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    border-radius: 14px;

    .cardArrowIcon {
      right: 5px;
    }
  }
`;

export const OurCommunityCardImageBox = styled.div<BreacPointsType>`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
  }

  p {
    position: absolute;
    top: 18px;
    left: 24px;
    color: #fff;
    font-family: "MazzardM-SemiBold";
    font-size: 18px;
    font-weight: 600;
    line-height: 15.75px;
  }

  span {
    position: absolute;
    top: 18px;
    right: 21px;
    display: inline-block;
    color: #fff;
    font-family: "MazzardM-SemiBold";
    font-size: 18px;
    font-weight: 500;
    line-height: 15.75px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  h2 {
    position: absolute;
    color: #fff;
    font-family: "MazzardM-SemiBold";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 31.5px;
    right: 24px;
    bottom: 10px;
  }

  .cardIcon-box {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    text-align: center;
    top: 42%;
    justify-content: center;
  }

  .cardIcon {
    width: 45px;
    height: 45px;
    color: white;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    p {
      top: 14.4px;
      left: 19.2px;
      font-size: 14.4px;
      line-height: 12.6px;
    }

    span {
      top: 14.4px;
      right: 16.6px;
      font-size: 14.4px;
      line-height: 12.6px;
    }

    h2 {
      font-size: 28.8px;
      line-height: 25.2px;
      right: 19.2px;
      bottom: 8.6;
    }

    .cardIcon {
      width: 40px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    p {
      top: 10.08px;
      left: 14.44px;
      font-size: 10.08px;
      line-height: 9px;
    }

    span {
      top: 10.08px;
      right: 11.72px;
      font-size: 10.08px;
      line-height: 9px;
    }

    h2 {
      font-size: 20.16px;
      line-height: 17.64px;
      right: 13.24px;
      bottom: 5.6;
    }

    .cardIcon {
      width: 25px;
    }
  }
`;
