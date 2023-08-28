import { styled } from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const NavbarWrapper = styled.nav<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 20px;
  }
`;

export const LinkItem = styled.div<BreacPointsType>`
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    a {
      gap: 6.4px;
    }
  }
`;

export const LinkItemText = styled.p<BreacPointsType>`
  font-family: "MazzardH-Medium";
  color: #aab4c2;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 16px;
  }
`;

export const LinkItemActiveBox = styled.div<BreacPointsType>`
  width: 5px;
  height: 5px;
  background-color: #1b63cc;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 4px;
    height: 4px;
  }
`;

export const LinkItemColumnLine = styled.div<BreacPointsType>`
  width: 2px;
  height: 16px;
  background-color: #aab4c2;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 1.5px;
    height: 12px;
  }
`;
