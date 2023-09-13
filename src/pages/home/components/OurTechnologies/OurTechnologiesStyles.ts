import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const OurTechnologiesContainerWrapper = styled.section<BreacPointsType>`
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
    margin-bottom: 30px;
  }
`;

export const OurTechnologiesWrapper = styled.section<BreacPointsType>`
  max-width: 1516px;
  /* margin: 250px auto; */
  margin: 0px auto;
  padding: 0 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    .md-removed-br {
      display: none;
    }

    margin: 100px auto;
  }
`;

export const OurTechnologiesPageNumber = styled.div<BreacPointsType>`
  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    justify-content: flex-start;
  }
`;

export const OurTechnologiesTitle = styled.div<BreacPointsType>`
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

export const OurTechnologiesCards = styled.div<BreacPointsType>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  justify-content: center;
  gap: 125px;
  padding: 0 56px 0px 56px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 58px;
    padding: 0;
    margin-top: -70px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 34px;
    max-width: 993px;
    margin: auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 15px;
    max-width: 769px;
    margin: auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: 100%;
    padding-top: 20px;
  }
`;

export const OurTechnologiesCard = styled.div<BreacPointsType>`
  padding: 45px 38px;
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: #111114;
  margin-top: 15px;
  transition: all 0.3s;
  width: 403px;

  .tecCardImage2 {
    width: 251px;
    margin: 30px auto 0 auto;
  }

  .tecCardImage1 {
    width: 179px;
    margin: 30px auto 0 auto;
  }

  &:hover {
    border: 1px solid white;
    cursor: pointer;
    transform: translateY(-30px);
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 322px;

    .tecCardImage2 {
      width: 200px;
    }

    .tecCardImage1 {
      width: 143px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 295px;

    .tecCardImage2 {
      width: 140px;
    }

    .tecCardImage1 {
      width: 100px;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 235px;
    padding: 24px 21px;
    border-radius: 22px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    &:hover {
      border: 1px solid white;
      cursor: pointer;
      transform: translateY(0px);
    }
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
    font-size: 17.92px;
    font-weight: 500;
    line-height: 17.472px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
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
    font-size: 13.44px;
    font-weight: 400;
    line-height: 12.566px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const OurTechnologiesCardButton = styled.p<BreacPointsType>`
  width: 190px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 141px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
