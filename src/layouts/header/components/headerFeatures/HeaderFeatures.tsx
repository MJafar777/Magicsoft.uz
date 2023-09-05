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
import { useContext } from "react";
import Menu from "../../../../components/menu/Menu";
import {
  ButtonContext,
  ButtonContextProps,
} from "../../../../context/ButtonContext";

const HeaderFeatures = () => {
  const { open, setOpen } = useContext<ButtonContextProps>(ButtonContext);

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
          <SideabrMenuBtnText onClick={() => setOpen(true)}>
            MENU{" "}
          </SideabrMenuBtnText>
        </SidebarMenuBtn>
        <SidebarMenuBurgerBtn onClick={() => setOpen(true)} src={burger} />
      </SidebarMenuBtnWrapper>
      <Menu />
    </HeaderFeaturesWrapper>
  );
};

export default HeaderFeatures;
