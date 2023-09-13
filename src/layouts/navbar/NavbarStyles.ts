import { styled } from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";
interface LinkItemProp {
  display?: boolean;
}

export const NavbarWrapper = styled.nav<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media ${(props) => props.theme.breakpoints?.xxl} {
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints?.xl} {
    gap: 13px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const LinkItem = styled.div<LinkItemProp>`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  &:hover .listOfLink {
    transform: translateY(${(prop) => (prop.display ? "0px" : "-300px")});
  }
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  .listOfLink {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    transition: all 0.5s;
    transform: translateY(${(prop) => (prop.display ? "0px" : "-300px")});
    height: 100%;
    top: 50px;
    left: -50%;

    div {
      transition: all 1s linear;
      display: flex;
      .travel {
        margin-left: 30px;
        margin-top: 40px;
        color: #1b63cc;
        transition: all 0.5s linear;

        font-size: 14px;
        width: 11vw;

        &:hover {
          color: white;
        }
      }

      .travel2 {
        margin-left: 30px;
        width: 11vw;
        margin-top: 70px;
        color: #1b63cc;
        font-size: 14px;
        transition: all 0.5s linear;

        &:hover {
          color: white;
        }
      }

      .travel3 {
        width: 11vw;
        margin-left: 30px;
        margin-top: 100px;
        color: #1b63cc;
        font-size: 14px;
        transition: all 0.5s linear;

        &:hover {
          color: white;
        }
      }
    }

    a {
      display: block;
      position: absolute;
      width: 100px;
      top: 20px;
      z-index: 1000;
    }

    img {
      transition: all 1s linear;
      z-index: -100;
      position: absolute;
      left: 20%;
      z-index: -333;
    }
  }
  @media ${(props) => props.theme.breakpoints?.xxl} {
    a {
      gap: 6.4px;
    }
  }

  @media ${(props) => props.theme.breakpoints?.xl} {
    a {
      gap: 4.48px;
    }
  }
`;

export const LinkItemText = styled.p<BreacPointsType>`
  font-family: "MazzardH-Medium";
  color: #aab4c2;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints?.xxl} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints?.xl} {
    font-size: 11.2px;
  }
`;

export const LinkItemActiveBox = styled.div<BreacPointsType>`
  width: 8px;
  height: 8px;
  background-color: #1b63cc;

  @media ${(props) => props.theme.breakpoints?.xxl} {
    width: 6px;
    height: 6px;
  }

  @media ${(props) => props.theme.breakpoints?.xl} {
    width: 4px;
    height: 4px;
  }
`;

export const LinkItemColumnLine = styled.div<BreacPointsType>`
  width: 2px;
  height: 16px;
  background-color: #aab4c2;

  @media ${(props) => props.theme.breakpoints?.xxl} {
    width: 1.5px;
    height: 12px;
  }

  @media ${(props) => props.theme.breakpoints?.xl} {
    width: 1px;
    height: 8px;
  }
`;
