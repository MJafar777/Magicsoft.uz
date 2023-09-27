import { FC, useContext } from "react";

import { devisesThree_PluginPruductPage_Navbar } from "../../../../assets/images/components/PlatformProducts";

import {
  Img,
  SubTitle,
  Paragraph,
  NavbarLeft,
  // ButtonContact,
  SubTitleBottomBorder,
  PlatformNavbarWrapper,
} from "./platformNavbar";
import { useNavigate } from "react-router-dom";
import { ButtonContext } from "../../../../context/ButtonContext";
import useLocales from "../../../../locales/useLocales";

interface Props {}

const PlatformNavbar: FC<Props> = () => {
  const navigate = useNavigate();

  const { translate } = useLocales();

  const { goToTop } = useContext(ButtonContext);

  const navigator = () => {
    navigate("/contact");
  };

  return (
    <PlatformNavbarWrapper>
      <NavbarLeft>
        <SubTitle>{translate("joinProjects")}</SubTitle>
        <SubTitleBottomBorder />
        <Paragraph>{translate("dreams")}</Paragraph>
        <div onClick={goToTop} className="center">
          <button className="btn" onClick={() => navigator()}>
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border"
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span>{translate("contact")}</span>
          </button>
        </div>
      </NavbarLeft>
      <Img
        src={devisesThree_PluginPruductPage_Navbar}
        alt="devisesThree_PluginPruductPage_Navbar"
      />
    </PlatformNavbarWrapper>
  );
};

export default PlatformNavbar;
