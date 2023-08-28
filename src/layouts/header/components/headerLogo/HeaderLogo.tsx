import { HeaderLogoWrapper, LogoImage, LogoText } from "./HeaderLogoStyles";

import logo from "../../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to={"/"}>
      <HeaderLogoWrapper>
        <LogoImage src={logo} />
        <LogoText>MagicSoft</LogoText>
      </HeaderLogoWrapper>
    </Link>
  );
};

export default HeaderLogo;
