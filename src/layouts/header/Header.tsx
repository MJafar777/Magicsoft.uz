import Navbar from "../navbar/Navbar";
import { HeaderContainer, HeaderWrapper } from "./HeaderStyles";
import { HeaderFeatures, HeaderLogo } from "./components";

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
