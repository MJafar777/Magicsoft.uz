import { useContext } from "react";
import {
  BodyOfMenu,
  CloseContainer,
  ContainerOfPageOfSite,
  EachLinkOfPage,
  MenuWrapper,
  NavOfmenu,
  SocialLink,
  SocialWrapper,
  Title,
} from "./MenuStyles";
import { Link } from "react-router-dom";
import {
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { ButtonContext, ButtonContextProps } from "../../context/ButtonContext";

const Menu = () => {
  const { setOpen, open } = useContext<ButtonContextProps>(ButtonContext);

  return (
    <MenuWrapper open={open}>
      <NavOfmenu>
        <SocialWrapper>
          <SocialLink>
            <Link to="/">
              <Telegram />
            </Link>{" "}
            <Link to="/">
              <Facebook />
            </Link>
            <Link to="/">
              <YouTube />
            </Link>
            <Link to="/">
              <LinkedIn />
            </Link>
            <Link to="/">
              <WhatsApp />
            </Link>
            <Link to="/">
              <Facebook />
            </Link>
            <Link to="/">
              <Instagram />
            </Link>
          </SocialLink>
        </SocialWrapper>
        <CloseContainer>
          <button onClick={() => setOpen(false)}>COLSE</button>
          <div className="btnClose" onClick={() => setOpen(false)}>
            <Close />
          </div>
        </CloseContainer>
      </NavOfmenu>
      <BodyOfMenu>
        <Title>Menu</Title>
        <ContainerOfPageOfSite>
          <EachLinkOfPage>Platforms & Products</EachLinkOfPage>
          <EachLinkOfPage>Industries</EachLinkOfPage>
          <EachLinkOfPage>News</EachLinkOfPage>
          <EachLinkOfPage>Blog</EachLinkOfPage>
          <EachLinkOfPage>About Us</EachLinkOfPage>
        </ContainerOfPageOfSite>
      </BodyOfMenu>
    </MenuWrapper>
  );
};

export default Menu;
