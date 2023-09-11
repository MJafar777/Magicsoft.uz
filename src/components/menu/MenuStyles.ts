import { styled } from "styled-components";
interface MenuWrapperProp {
  open: boolean;
}

export const MenuWrapper = styled.div<MenuWrapperProp>`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.5s linear;
  transform: translateX(${(prop) => (prop.open ? "0" : "-100%")});
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  @media ${(prop) => prop.theme.breakpoints.sm} {
    height: 110vh;
  }
`;

export const NavOfmenu = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 100px;
  justify-content: space-between;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 40px 80px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    padding: 30px 60px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    justify-content: end;
    padding: 20px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${(prop) => prop.theme.breakpoints.sm} {
    position: absolute;
    bottom: 12%;
    left: 15%;
    width: 100%;
    margin: 0 auto;
  }
`;

export const SocialLink = styled.div`
  display: flex;
  gap: 20px;
  a {
    display: block;
    color: white;
  }
`;

export const CloseContainer = styled.div`
  width: 181px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 70%;
    text-align: center;
    padding: 18px 30px;
    border-radius: 26px;
    background-color: transparent;
    color: white;
    border: white 1px solid;
    cursor: pointer;
  }

  .btnClose {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: white 1px solid;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const BodyOfMenu = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  width: 100%;
  display: flex;
  height: calc(100vh - 200px);
  justify-content: center;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding-top: 100px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    padding: 80px;
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    padding: 80px 10px;
  }
`;

export const Title = styled.div`
  /* height: 70%; */
  font-family: "Concretica";
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: right;
  font-size: 86px;
  padding-right: 10%;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 70px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 30%;
    font-size: 65px;
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    font-size: 56px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    display: none;
  }
`;

export const ContainerOfPageOfSite = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 85%;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    width: 90%;
  }
`;

export const EachLinkOfPage = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "MazzardM-Regular";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.16px;
  cursor: pointer;
  transition: all 0.2s linear;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px #aab4c2 solid;
    padding-bottom: 12px;
    width: fit-content;
    transition: all 0.2s;
    line-height: 30px;

    p {
      font-family: MazzardM-Regular;
      color: #aab4c2;
      transition: all 0.2s;
    }

    span {
      display: block;
      width: 10px;
      height: 10px;
      transition: all 0.2s linear;
      background-color: transparent;
      margin-left: 15px;
    }

    img {
      transition: 0.2s linear all;
      margin-left: 30px;
    }
  }

  &:hover {
    span {
      background-color: #d4f54c;
    }

    img {
      transform: rotate(-45deg);
    }

    a {
      border-bottom: 1px #fff solid;

      p {
        font-family: MazzardH-Regular;
        margin-left: 22.5px;
        color: #fff;
      }
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 45px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 100%;
    font-size: 38px;
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    font-size: 32px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 24px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
