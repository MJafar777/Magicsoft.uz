import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const HeaderFeaturesWrapper = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 20px;
  }
`;

export const LinkItem = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  gap: 15px;
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

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 12px;

    .headerLanguageIcon {
      font-size: 18px;
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

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 16px;
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
`;

export const SidebarMenuBurgerBtn = styled.img<BreacPointsType>`
  width: 50px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 40px;
    height: 40px;
  }
`;
