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

import folder from "../../../../assets/nav/folder.svg";

const HeaderFeatures = () => {
  const {
    setOpen,
    setDisplayOfLanguage,
    displayOfLanguage,
    setDisplayOfIndustry,
  } = useContext<ButtonContextProps>(ButtonContext);

  const toggleButtonLang = () => {
    setDisplayOfIndustry(false);
    if (displayOfLanguage) {
      setDisplayOfLanguage(false);
    } else {
      setDisplayOfLanguage(true);
    }
  };

  return (
    <HeaderFeaturesWrapper>
      <LinkItem>
        <NavLink to="/login">
          <LinkItemText
            className="loginLink"
            onClick={() => {
              setDisplayOfIndustry(false);
              setDisplayOfLanguage(false);
            }}
          >
            Log In
          </LinkItemText>
        </NavLink>
      </LinkItem>

      <LinkItemColumnLine />

      <LinkItem display={displayOfLanguage}>
        <LanguageIcon className="headerLanguageIcon" />
        <LinkItemText onClick={() => toggleButtonLang()}>English</LinkItemText>
        <div className="listOfLink">
          <div className="uz" onClick={() => setDisplayOfLanguage(false)}>
            <p>Uzbekcha</p>
          </div>
          <div className="ru" onClick={() => setDisplayOfLanguage(false)}>
            <p>Русский</p>
          </div>
          <div className="en" onClick={() => setDisplayOfLanguage(false)}>
            <p>English</p>
          </div>
          <img src={folder} alt="" />
        </div>
      </LinkItem>

      <LinkItemColumnLine />

      <SidebarMenuBtnWrapper>
        <SidebarMenuBtn onClick={() => setOpen(true)}>
          <SideabrMenuBtnText>MENU </SideabrMenuBtnText>
        </SidebarMenuBtn>
        <SidebarMenuBurgerBtn onClick={() => setOpen(true)} src={burger} />
      </SidebarMenuBtnWrapper>
      <Menu />
    </HeaderFeaturesWrapper>
  );
};

export default HeaderFeatures;
