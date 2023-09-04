import { styled } from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: #000;
  z-index: 500;
`;

export const HeaderWrapper = styled.header<BreacPointsType>`
  max-width: 1652px;
  height: 111px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1321px;
    height: 88px;
    padding: 0 26px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 834px;
    height: 54px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 747px;
    height: 54px;
    padding: 0 11px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 18px;
  }
`;
