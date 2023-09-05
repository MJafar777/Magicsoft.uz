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

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    height: 528px;
    margin-top: 51px;
    padding-right: 210px;
  }
  @media ${(prop) => prop.theme.breakpoints.xl} {
    height: 370px;
    padding-right: 170px;
    

  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    padding-right: 40px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    padding-right: 20px;
  }
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

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 464px;
    height: 425.6px;
    padding: 60px 30px;

    h3 {
      font-size: 39px;
    }

    p {
      font-size: 16px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 324.8px;
    height: 297.92px;
    padding: 42px 21px;

    h3 {
      font-size: 27.44px;
    }
    p {
      font-size: 12px;
    }
  }
`;
