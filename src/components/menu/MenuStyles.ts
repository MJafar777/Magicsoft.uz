import { styled } from "styled-components";
interface MenuWrapperProp {
  open: boolean;
}

export const MenuWrapper = styled.div<MenuWrapperProp>`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: absolute;
  /* top: ${(prop) => (prop.open ? 0 : 100)}
  ; */
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
`;

export const NavOfmenu = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 100px;
  justify-content: space-between;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
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
`;

export const ContainerOfPageOfSite = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EachLinkOfPage = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "MazzardM-Regular";
  font-size: 58px;
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

    p {
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
        margin-left: 22.5px;
        color: #fff;
      }
    }
  }
`;
