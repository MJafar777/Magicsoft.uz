import { styled } from "styled-components";

export const AnalysisWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 143px;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 85%;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 90%;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 70%;
    flex-wrap: wrap;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
  width: 100%;
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
  font-family: Archivo;
  font-size: 49px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
  color: white;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 39px;
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
  font-family: Archivo;
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
