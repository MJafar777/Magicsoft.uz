/* eslint-disable react-hooks/rules-of-hooks */
import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

interface PropLinkItem {
  display?: boolean;
}



export const HeaderFeaturesWrapper = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 14px;
  }
`;

export const LinkItem = styled.div<PropLinkItem>`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  cursor: pointer;

  .headerLanguageIcon {
    color: #aab4c2;
    margin-top: -3px;
    transition: color 0.3s;
  }

  &:hover {
    .headerLanguageIcon,
    p {
      color: #fff;
    }
  }

  p.loginLink {
    color: #d4f54c;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  .listOfLink {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 50px;
    left: -50px;
    transition: all 0.5s;
    transform: translateY(${(prop) => (prop.display ? "0px" : "-300px")});

    div {
      transition: all 1s linear;
      display: flex;
      p {
        transition: all 0.5s linear;

        margin-top: 30px;
        margin-left: 50px;
        font-size: 24px;
        color: #1b63cc;
        &:hover {
          color: white;
        }
      }
    }

    img {
      transition: all 1s linear;

      z-index: -100;
      position: absolute;
      left: 20%;
      z-index: -333;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 12px;

    .headerLanguageIcon {
      font-size: 18px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 8.4px;

    .headerLanguageIcon {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const LinkItemText = styled.p<BreacPointsType>`
  font-family: "MazzardH-Medium";
  color: #aab4c2;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 11.2px;
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

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 1px;
    height: 8px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const SidebarMenuBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const SidebarMenuBtn = styled.div<BreacPointsType>`
  width: 131px;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 26px;
  border: 1.5px solid #aab4c2;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 105px;
    height: 40px;
    border-radius: 20.8px;
    border: 1px solid #aab4c2;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 74px;
    height: 28px;
    border-radius: 14.56px;
    border: 1px solid #aab4c2;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

export const SideabrMenuBtnText = styled.p<BreacPointsType>`
  width: 100%;
  color: #fff;
  font-family: "Concretica";
  font-size: 18px;
  font-weight: 400;
  line-height: 87.5%;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14.4px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 10.8px;
  }
`;

export const SidebarMenuBurgerBtn = styled.img<BreacPointsType>`
  width: 50px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 40px;
    height: 40px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 28px;
    height: 28px;
  }
`;
