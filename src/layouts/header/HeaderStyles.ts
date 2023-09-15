import { styled } from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
    height: 88px;
    padding: 0 26px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    height: 54px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 54px;
    padding: 0 11px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 18px;
  }
`;
