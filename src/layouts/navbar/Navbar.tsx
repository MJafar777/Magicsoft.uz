import {  NavLink } from "react-router-dom";
import {
  LinkItem,
  LinkItemText,
  NavbarWrapper,
  LinkItemActiveBox,
  LinkItemColumnLine,
} from "./NavbarStyles";
import folder from "../../assets/nav/folder.svg";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <LinkItem>
        <NavLink to="/platform_products">
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

      <LinkItem>
        <NavLink to="/industries">
          {({ isActive }) =>
            isActive ? (
              <>
                <LinkItemActiveBox></LinkItemActiveBox>
                <LinkItemText>Industries</LinkItemText>
              </>
            ) : (
              <LinkItemText>Industries</LinkItemText>
            )
          }
        </NavLink>
        <div className="listOfLink">
          <div>
            <a href="/" className="travel">
              Travel 1
            </a>
          </div>
          <div>
            <a href="/" className="travel">
              Travel 1
            </a>
          </div>
          <div>
            <a href="/" className="travel">
              Travel 1
            </a>
          </div>
          <img src={folder} alt="" />
        </div>
      </LinkItem>

      <LinkItemColumnLine />

      <LinkItem>
        <NavLink to="/news">
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

      <LinkItemColumnLine />

      <LinkItem>
        <NavLink to="/blog">
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

      <LinkItemColumnLine />

      <LinkItem>
        <NavLink to="/about-us">
          {({ isActive }) =>
            isActive ? (
              <>
                <LinkItemActiveBox></LinkItemActiveBox>
                <LinkItemText>About Us</LinkItemText>
              </>
            ) : (
              <LinkItemText>About Us </LinkItemText>
            )
          }
        </NavLink>
      </LinkItem>
    </NavbarWrapper>
  );
};

export default Navbar;
