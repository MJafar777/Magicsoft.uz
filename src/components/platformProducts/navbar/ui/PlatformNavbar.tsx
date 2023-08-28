import { FC } from "react";

import { devisesThree_PluginPruductPage_Navbar } from "../../../../assets/images/components/PlatformProducts";

import {
  Img,
  SubTitle,
  Paragraph,
  NavbarLeft,
  ButtonContact,
  SubTitleBottomBorder,
  PlatformNavbarWrapper,
} from "./platformNavbar";

interface Props {}

const PlatformNavbar: FC<Props> = () => {
  return (
    <PlatformNavbarWrapper>
      <NavbarLeft>
        <SubTitle>Projects cool title</SubTitle>
        <SubTitleBottomBorder />
        <Paragraph>
          Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis
          libero, proin consequat ultrices congue nunc sit.
        </Paragraph>
        <ButtonContact>Contact</ButtonContact>
      </NavbarLeft>
      <Img
        src={devisesThree_PluginPruductPage_Navbar}
        alt="#devisesThree_PluginPruductPage_Navbar"
      />
    </PlatformNavbarWrapper>
  );
};

export default PlatformNavbar;
