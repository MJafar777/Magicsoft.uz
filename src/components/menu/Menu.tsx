import { useContext, useEffect } from "react";
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
import { Arrow } from "../../assets/industries";

const Menu = () => {
  const { setOpen, open } = useContext<ButtonContextProps>(ButtonContext);

  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);


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
          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/news">
              <>
                <span></span> <p>News</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>

          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/platform_products">
              <>
                <span></span> <p>Platforms & Products</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>
          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/travels">
              <>
                <span></span> <p>Travel, Logistics & Hospitality</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>
          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/retail">
              <>
                <span></span> <p>Retail and e-commerce</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>
          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/fintech">
              <>
                <span></span> <p>Fintech and Banking</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>
          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/blog">
              <>
                <span></span> <p>Blog</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>
          <EachLinkOfPage onClick={() => setOpen(false)}>
            <Link to="/about-us">
              <>
                <span></span> <p>About Us</p>
              </>
              <img src={Arrow} alt="" />
            </Link>
          </EachLinkOfPage>
        </ContainerOfPageOfSite>
      </BodyOfMenu>

    </MenuWrapper>
  );
};

export default Menu;
