import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const SuccessfulProjectsContainerWrapper = styled.section<BreacPointsType>`
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

  .successfulProjectsPageSectionNumber {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    max-width: 1201px;
    min-height: 630px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;
    padding: 0px 20px;
    padding-top: 0px;
    max-width: 993px;
    min-height: 441px;
    height: auto;

    .successfulProjectsPageSectionNumber {
      margin-bottom: 60px;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 768px;
    min-height: 200px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0px auto;
    justify-content: flex-start;

    .successfulProjectsPageSectionNumber {
      margin-bottom: 0px;
      display: none;
    }
  }
`;

export const SuccessfulProjectsWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  .noneBorder {
    border-right: none;
  }
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 85%;
    margin-top: 60px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 90%;
    margin-top: 50px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 0;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const SuccessfulProjectsTitle = styled.div`
  color: #fff;
  font-family: "Concretica";
  font-size: 78px;
  font-style: normal;
  font-weight: 400;
  line-height: 91.65px;
  margin: 0;
  text-align: left;
  margin-top: -40px;

  span {
    color: #d4f54c;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 62.8px;
    line-height: 62.638px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 43.8px;
    line-height: 43.638px;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 42.8px;
    line-height: 42.638px;
    text-align: left;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    max-width: 350px;
    margin: 0 auto;
    font-size: 42px;

    .md-removed {
      display: none;
    }
  }
`;

export const CardOfSuccessfulProjects = styled.div`
  width: 20%;
  border-right: #fcd702 solid 1px;

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 50%;
    border: none;
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-child(odd) {
      border-right: #fcd702 solid 1px;
    }
  }
`;

export const Title = styled.div`
  text-align: left;
  font-family: MazzardH-Medium;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
  color: white;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 35px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 27px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 32px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  text-align: left;
  font-family: "MazzardH-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: white;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 12px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 14px;
  }
`;
