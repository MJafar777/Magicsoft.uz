import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const OurCommunityWrapper = styled.section<BreacPointsType>`
  max-width: 163px;
  margin: 200px auto;
  height: 100vh;
`;

export const OurCommunityTitle = styled.section<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 98.298px;
  margin-top: 17px;
  margin-bottom: 52px;

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

export const OurCommunityCards = styled.section<BreacPointsType>``;

export const OurCommunityCard = styled.section<BreacPointsType>``;
