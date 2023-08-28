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

const HeaderFeatures = () => {
  return (
    <HeaderFeaturesWrapper>
      <LinkItem>
        <LinkItemText className="loginLink">Log In</LinkItemText>
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
