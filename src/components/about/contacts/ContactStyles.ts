import { styled } from "styled-components";
import BgContact from "../../../assets/about/bgOfContact.svg";
export const ContactWrapper = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  background-image: url(${BgContact});
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
  padding-top: 10%;
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: white;
  width: 40%;
  .border {
    width: 30%;
    background-color: #FCD702;
    height: 10px;
    margin: 60px 0 30px 0;
    border-radius: 5px;
  }
`;

export const Title = styled.div`
  font-family: Archivo;
  font-size: 49px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
`;

export const Content = styled.div`
  font-family: Archivo;
  width: 90%;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
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
    font-family: Archivo;
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
    font-family: Archivo;
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
    font-family: Archivo;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    background: var(--Yellow, #FCD702);
    padding: 9px 0;
    line-height: normal;
    margin-bottom: 18px;
    border: none;
    border-radius: 3px;
  }
`;

export const Privacy = styled.div`
  font-family: Archivo;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  color: #898989;
  span {
    color: white;
  }
`;
