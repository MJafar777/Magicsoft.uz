import { styled } from "styled-components";

export const SuccessfulProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const SuccessfulProjectsNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 100px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 20px;
  }
`;

export const SuccessfulProjectsTitle = styled.h2`
  font-family: "MazzardM-Semibold";
  color: #fff;
  font-size: 86px;
  font-weight: 600;
  line-height: 95px;
  margin: 20px auto;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 850px;
    font-size: 68.8px;
    line-height: 75.542px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 48.8px;
    font-weight: 600;
    line-height: 55.638px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42.8px;
    font-weight: 600;
    line-height: 48.638px;
    margin-bottom: 0;
  }
`;

export const AnalysisWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 143px;
  .noneBorder {
    border-right: none;
  }
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 85%;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 90%;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 70%;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
  }
`;

export const CardOfAnalysis = styled.div`
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
  font-family: "MazzardH-Medium";
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
