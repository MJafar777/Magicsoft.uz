import { styled } from "styled-components";
import banner from "../../../assets/about/banner.svg";
export const BanerWrapper = styled.div`
  width: 100%;
  height: 660px;
  margin-top: 138px;
  background-image: url(${banner});
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 310px;
`;

export const ContentOfBaner = styled.div`
  width: 580px;
  height: 512px;
  color: white;
  background-color: black;
  padding: 70px 38px;
  h3 {
    font-size: 45px;
    margin-bottom: 24px;
    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    line-height: 114.3%;
  }

  p {
    font-family: Archivo;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 137.8%;
  }
`;
