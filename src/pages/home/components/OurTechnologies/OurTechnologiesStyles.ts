import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const OurTechnologiesWrapper = styled.section<BreacPointsType>`
  max-width: 1516px;
  margin: 250px auto;
`;

export const OurTechnologiesTitle = styled.div<BreacPointsType>`
  color: #fff;
  font-family: "Concretica";
  font-size: 78px;
  font-style: normal;
  font-weight: 400;
  line-height: 91.65px;
  margin: 17px 0;
  text-align: left;

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
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 42.8px;
    line-height: 42.638px;
  }
`;

export const OurTechnologiesCards = styled.div<BreacPointsType>`
  display: grid;
  align-items: flex-end;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 125px;
  padding: 56px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 58px;
    padding: 0;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const OurTechnologiesCard = styled.div<BreacPointsType>`
  padding: 45px 38px;
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: #111114;
  margin-top: 15px;

  .tecCardImage2 {
    width: 251px;
    margin: 30px auto 0 auto;
  }

  .tecCardImage1 {
    width: 179px;
    margin: 30px auto 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    .tecCardImage2 {
      width: 200px;
    }

    .tecCardImage1 {
      width: 143px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const OurTechnologiesCardTitle = styled.h2<BreacPointsType>`
  margin-bottom: 17px;

  color: #d4f54c;
  text-align: center;
  font-family: "MazzardH-Medium";
  font-size: 32px;
  font-weight: 500;
  line-height: 31.68px;

  span {
    color: white;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 25.6px;
    font-weight: 500;
    line-height: 25.344px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const OurTechnologiesCardDescription = styled.p<BreacPointsType>`
  color: #aab4c2;
  text-align: center;
  font-family: "MazzardH-Medium";
  font-size: 24px;
  font-weight: 400;
  line-height: 22.8px;
  letter-spacing: -0.24px;
  margin-bottom: 37px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 19.2px;
    font-weight: 400;
    line-height: 18.24px;
    letter-spacing: -0.192px;
    margin-bottom: 30px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const OurTechnologiesCardButton = styled.p<BreacPointsType>`
  width: 190px;
  margin: 0 auto;
`;
