import {
  LinkItem,
  LinkItemText,
  SidebarMenuBtn,
  LinkItemColumnLine,
  SideabrMenuBtnText,
  SidebarMenuBurgerBtn,
  SidebarMenuBtnWrapper,
  HeaderFeaturesWrapper,
} from "./HeaderFeaturesStyles";

// ----- @MUI -----
import LanguageIcon from "@mui/icons-material/Language";

import burger from "../../../../assets/images/burger.svg";
import { NavLink } from "react-router-dom";

const HeaderFeatures = () => {
  return (
    <HeaderFeaturesWrapper>
      <LinkItem>
        <NavLink to="/login">
          <LinkItemText className="loginLink">Log In</LinkItemText>
        </NavLink>
      </LinkItem>

      <LinkItemColumnLine />

      <LinkItem>
        <LanguageIcon className="headerLanguageIcon" />
        <LinkItemText>English</LinkItemText>
      </LinkItem>

      <LinkItemColumnLine />

      <SidebarMenuBtnWrapper>
        <SidebarMenuBtn>
          <SideabrMenuBtnText>MENU </SideabrMenuBtnText>
        </SidebarMenuBtn>
        <SidebarMenuBurgerBtn src={burger} />
      </SidebarMenuBtnWrapper>
    </HeaderFeaturesWrapper>
  );
};

export default HeaderFeatures;
