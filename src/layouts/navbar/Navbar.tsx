import { Link, NavLink } from "react-router-dom";
import {
  LinkItem,
  LinkItemText,
  NavbarWrapper,
  LinkItemActiveBox,
  LinkItemColumnLine,
} from "./NavbarStyles";
import folder from "../../assets/nav/folder.svg";
import { useState } from "react";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  console.log(display);

  return (
    <NavbarWrapper>
      <LinkItem>
        <NavLink to="/platform_products" onClick={() => setDisplay(false)}>
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

      <LinkItem display={display}>
        {/* <NavLink to="/travels"> */}
        <>
          {/* {({ isActive }) => */}
          {/* isActive ? ( */}
          <>
            <LinkItemActiveBox></LinkItemActiveBox>
            <LinkItemText onClick={() => setDisplay((pre) => !pre)}>
              Industries
            </LinkItemText>
          </>
          {/* ) : (
                <LinkItemText onClick={() => setDisplay(true)}>
                  Industries
                </LinkItemText>
              )
            } */}
        </>
        {/* </NavLink> */}
        <div className="listOfLink">
          <div onClick={() => setDisplay(false)}>
            <Link to="/travels" className="travel">
              Travel, Logistics & Hospitality
            </Link>
          </div>
          <div onClick={() => setDisplay(false)}>
            <Link to="/retail" className="travel2">
              Retail and e-commerce
            </Link>
          </div>
          <div onClick={() => setDisplay(false)}>
            <Link to="/fintech" className="travel3">
              Fintech and Banking
            </Link>
          </div>
          <img src={folder} alt="" />
        </div>
      </LinkItem>

      <LinkItemColumnLine />

      <LinkItem>
        <NavLink to="/news" onClick={() => setDisplay(false)}>
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
        <NavLink to="/blog" onClick={() => setDisplay(false)}>
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
        <NavLink to="/about-us" onClick={() => setDisplay(false)}>
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
