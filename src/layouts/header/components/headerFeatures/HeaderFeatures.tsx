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
import useLocales from "../../../../locales/useLocales";

const HeaderFeatures = () => {
  const {
    setOpen,
    setDisplayOfLanguage,
    displayOfLanguage,
    setDisplayOfIndustry,
  } = useContext<ButtonContextProps>(ButtonContext);

  // const [lang, setLang] = useState("uz");

  const { onChangeLang, translate } = useLocales();

  const toggleButtonLang = () => {
    setDisplayOfIndustry(false);
    if (displayOfLanguage) {
      setDisplayOfLanguage(false);
    } else {
      setDisplayOfLanguage(true);
    }
  };

  const handleLanguage = (prop: string) => {
    onChangeLang(prop);
    setDisplayOfLanguage(false);
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

      <LinkItem display={displayOfLanguage} onClick={() => toggleButtonLang()}>
        <LanguageIcon className="headerLanguageIcon" />
        <LinkItemText>{translate("changeLang")}</LinkItemText>
        <div className="listOfLink">
          <div className="uz" onClick={() => handleLanguage("uz")}>
            <p>Uzbekcha</p>
          </div>
          <div className="ru" onClick={() => handleLanguage("ru")}>
            <p>Русский</p>
          </div>
          <div className="en" onClick={() => handleLanguage("en")}>
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
