import { styled } from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
`;

export const LinkItem = styled.div`
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
`;

export const LinkItemText = styled.p`
  font-family: "MazzardH-Medium";
  color: #aab4c2;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const LinkItemActiveBox = styled.div`
  width: 5px;
  height: 5px;
  background-color: #1b63cc;
`;

export const LinkItemColumnLine = styled.div`
  width: 2px;
  height: 16px;
  background-color: #aab4c2;
`;
