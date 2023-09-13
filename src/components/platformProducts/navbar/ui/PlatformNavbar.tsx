import { FC } from "react";

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

interface Props {}

const PlatformNavbar: FC<Props> = () => {
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/contact");
  };

  return (
    <PlatformNavbarWrapper>
      <NavbarLeft>
        <SubTitle>Projects cool title</SubTitle>
        <SubTitleBottomBorder />
        <Paragraph>
          Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis
          libero, proin consequat ultrices congue nunc sit.
        </Paragraph>
        {/* <ButtonContact>Contact</ButtonContact> */}
        <div className="center">
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
            <span>Contact</span>
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
