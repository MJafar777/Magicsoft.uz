import { styled } from "styled-components";

interface InovationNameProp {
  active: boolean;
}

export const TechnologyWrapper = styled.div`
  max-width: 1650px;
  padding-top: 150px;
  padding-bottom: 128px;
  width: 80%;
  margin: 0 auto;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleInovation = styled.div`
  color: #fff;
  text-align: start;
  font-family: "MazzardM-SemiBold";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 109.8%;
  padding-left: 5%;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 68.8px;
    padding: 0;
    padding-top: 120px;
    padding-bottom: 74px;
    display: flex;
    justify-content: center;
    padding-left: 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 48.16px;
    padding-bottom: 52px;
    text-align: center;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 42.16px;
    padding-bottom: 42px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 32.16px;
    padding-bottom: 22px;
  }
`;

export const ContainerInovationSkils = styled.div`
  padding-top: 94px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InovationSkil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .topContent {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: solid 1px white;
    padding-bottom: 18px;
    margin-bottom: 18px;
    margin-top: 40px;
    /* padding-left: 20px; */

    p {
      text-align: left;
      font-size: 58px;
      font-family: "MazzardM-Regular";
      transition: all 0.5s linear;
    }
    span {
      width: 10px;
      height: 10px;
      background-color: transparent;
      transition: all 0.5s linear;
      margin-right: 12px;
    }

    img {
      margin-left: 30px;
      transition: all 0.5s linear;
    }
  }

  &:hover {
    span {
      background-color: #d4f54c;
    }

    img {
      transform: rotate(-45deg);
    }

    p {
      margin-left: 22.5px;
      color: #fff;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    .topContent {
      p {
        font-size: 46.4px;
      }
    }
    width: 776px;
    margin-bottom: 30px;
    margin-left: 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    .topContent {
      p {
        font-size: 42.16px;
      }
    }
    width: 100%;
    margin-bottom: 20px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    .topContent {
      p {
        font-size: 28.16px;
      }
    }
    margin-bottom: 10px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    margin-bottom: 5px;
    .topContent {
      p {
        font-size: 20px;
      }
    }
  }
`;

export const InovationName = styled.div<InovationNameProp>`
  align-items: center;
  padding: 18px 10px;
  color: #fff;
  font-family: "MazzardM-Regular";
  font-size: 58px;
  font-weight: 400;
  letter-spacing: 1.16px;
  border-bottom: 1px white solid;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 46.4px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 42.16px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
  }
`;

export const InovationInfo = styled.div`
  color: #fff;
  font-family: "MazzardM-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 27.56px */
  width: 70%;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 11.2px;
  }
`;
