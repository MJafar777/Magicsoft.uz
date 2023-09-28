import { Link, NavLink } from "react-router-dom";
import {
  LinkItem,
  LinkItemText,
  NavbarWrapper,
  LinkItemActiveBox,
  LinkItemColumnLine,
} from "./NavbarStyles";
import folder from "../../assets/nav/folder.svg";
import { useContext } from "react";
import { ButtonContext } from "../../context/ButtonContext";
import useLocales from "../../locales/useLocales";
const Navbar = () => {
  const { translate } = useLocales();

  const { setDisplayOfIndustry, displayOfIndustry, setDisplayOfLanguage } =
    useContext(ButtonContext);

  const toggleButtonIndustry = () => {
    setDisplayOfLanguage(false);
    if (displayOfIndustry) {
      setDisplayOfIndustry(false);
    } else {
      setDisplayOfIndustry(true);
    }
  };

  return (
    <NavbarWrapper>
      <LinkItem display={displayOfIndustry}>
        <NavLink
          to="/platform_products"
          onClick={() => {
            setDisplayOfIndustry(false);
            setDisplayOfLanguage(false);
          }}
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <LinkItemActiveBox></LinkItemActiveBox>
                <LinkItemText>Platforms & Products</LinkItemText>
              </>
            ) : (
              <LinkItemText>Platforms & Products</LinkItemText>
            )
          }
        </NavLink>
      </LinkItem>

      <LinkItemColumnLine />

      <LinkItem display={displayOfIndustry}>
        <LinkItemText onClick={() => toggleButtonIndustry()}>
          {displayOfIndustry ? (
            <LinkItemActiveBox></LinkItemActiveBox>
          ) : (
            <div></div>
          )}
          {/* Industries */}
          {translate("Industries")}
        </LinkItemText>

        <div className="listOfLink">
          <div onClick={() => setDisplayOfIndustry(false)}>
            <Link to="/travels" className="travel">
              {translate("travelNavbar")}
            </Link>
          </div>
          <div onClick={() => setDisplayOfIndustry(false)}>
            <Link to="/retail" className="travel2">
              {translate("retailNavbar")}
            </Link>
          </div>
          <div onClick={() => setDisplayOfIndustry(false)}>
            <Link to="/fintech" className="travel3">
              {translate("fintechNavbar")}
            </Link>
          </div>
          <img src={folder} alt="" />
        </div>
      </LinkItem>

      <LinkItemColumnLine />

      <LinkItem className="lg-remove">
        <NavLink
          to="/news"
          onClick={() => {
            setDisplayOfIndustry(false);
            setDisplayOfLanguage(false);
          }}
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <LinkItemActiveBox></LinkItemActiveBox>
                <LinkItemText>News</LinkItemText>
              </>
            ) : (
              <LinkItemText>News</LinkItemText>
            )
          }
        </NavLink>
      </LinkItem>

      <LinkItemColumnLine className="lg-remove" />

      <LinkItem className="lg-remove">
        <NavLink
          to="/blog"
          onClick={() => {
            setDisplayOfIndustry(false);
            setDisplayOfLanguage(false);
          }}
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <LinkItemActiveBox></LinkItemActiveBox>
                <LinkItemText>Blog</LinkItemText>
              </>
            ) : (
              <LinkItemText>Blog</LinkItemText>
            )
          }
        </NavLink>
      </LinkItem>

      <LinkItemColumnLine className="lg-remove" />

      <LinkItem>
        <NavLink
          to="/about-us"
          onClick={() => {
            setDisplayOfIndustry(false);
            setDisplayOfLanguage(false);
          }}
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <LinkItemActiveBox></LinkItemActiveBox>
                <LinkItemText>{translate("aboutUs")}</LinkItemText>
              </>
            ) : (
              <LinkItemText>{translate("aboutUs")}</LinkItemText>
            )
          }
        </NavLink>
      </LinkItem>
    </NavbarWrapper>
  );
};

export default Navbar;
