import { styled } from "styled-components";
import BgContact from "../../../assets/about/bgOfContact.svg";
export const ContactWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-image: url(${BgContact});
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    width: 70%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 50px;
    padding-top: 10%;
    padding-bottom: 10%;
    background-color: #000;
  }
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    .bg {
      width: 90%;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    .bg {
      width: 100%;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    .bg {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: white;
  width: 40%;
  .border {
    width: 30%;
    background-color: #fcd702;
    height: 10px;
    margin: 60px 0 30px 0;
    @media ${(prop) => prop.theme.breakpoints.xxl} {
      margin: 67px 0 23px 0;
    }

    @media ${(prop) => prop.theme.breakpoints.xl} {
      margin: 47px 0 16px 0;
    }

    @media ${(prop) => prop.theme.breakpoints.md} {
      width: 50%;
      margin: 20px auto 23px auto;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Title = styled.div`
  font-family: Archivo-Regular;
  font-size: 49px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 39px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 27.44px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 0cqmax;
  }
`;

export const Content = styled.div`
  font-family: Archivo-Regular;
  width: 90%;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 12px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 70%;
    margin: 0 auto;
  }
`;

export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: Archivo-Regular;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 137.8%; /* 27.56px */
    opacity: 0.5;
    border-bottom: solid 1px gray;
    padding-bottom: 9px;
    padding-left: 13px;
    margin-bottom: 29px;
  }
  textarea {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: Archivo-Regular;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 137.8%; /* 27.56px */
    opacity: 0.5;
    padding-bottom: 9px;
    border-bottom: solid 1px gray;
    margin-bottom: 29px;
    padding-left: 13px;
    height: 20vh;
  }
  button {
    width: 40%;
    color: #000;
    font-family: Archivo-Regular;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    background: var(--Yellow, #fcd702);
    padding: 9px 0;
    line-height: normal;
    margin-bottom: 18px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 6px 6px 1px #403a16;
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 40%;
    input {
      padding-bottom: 7px;
      padding-left: 10px;
      margin-bottom: 23px;
    }

    textarea {
      padding-bottom: 9px;
      margin-bottom: 23px;
      padding-left: 10px;
      height: 15vh;
    }

    button {
      margin-bottom: 16px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 35%;
    input {
      padding-bottom: 5px;
      padding-left: 7px;
      margin-bottom: 16px;
    }

    textarea {
      padding-bottom: 7px;
      margin-bottom: 16px;
      padding-left: 7px;
      height: 10vh;
    }

    button {
      font-size: 12px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Privacy = styled.div`
  font-family: Archivo-Regular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  color: #898989;
  span {
    color: white;
    border-bottom: white solid 1px;
  }
  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 12px;
  }
`;
