import Navbar from "../navbar/Navbar";
import { HeaderFeatures, HeaderLogo } from "./components";
import { HeaderContainer, HeaderWrapper } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo />

        <Navbar />

        <HeaderFeatures />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
