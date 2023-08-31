import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img<BreacPointsType>`
  width: 50px;
  height: 50.5px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 40px;
    height: 40px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 28px;
    height: 28px;
  }
`;

export const LogoText = styled.p<BreacPointsType>`
  color: #fff;
  text-align: justify;
  font-family: "MazzardH-Medium";
  font-size: 24px;
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 19.2px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 13.44px;
  }
`;
