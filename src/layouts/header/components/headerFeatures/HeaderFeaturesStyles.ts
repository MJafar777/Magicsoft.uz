import { styled } from "styled-components";

export const HeaderFeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
`;

export const LinkItem = styled.div`
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
`;

export const LinkItemText = styled.p`
  font-family: "MazzardH-Medium";
  color: #aab4c2;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;
`;

export const LinkItemColumnLine = styled.div`
  width: 2px;
  height: 16px;
  background-color: #aab4c2;
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

export const SidebarMenuBtn = styled.div`
  width: 131px;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 26px;
  border: 1.5px solid #aab4c2;
`;

export const SideabrMenuBtnText = styled.p`
  width: 100%;
  color: #fff;
  font-family: "Concretica";
  font-size: 18px;
  font-weight: 400;
  line-height: 87.5%;
  text-align: center;
`;

export const SidebarMenuBurgerBtn = styled.img`
  width: 50px;
`;
