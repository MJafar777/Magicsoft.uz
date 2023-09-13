import { styled } from "styled-components";

export const OverViewWraper = styled.div`
  height: fit-content;
  /* padding-left: 230px; */
  width: 100%;
  background-color: #111114;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    max-width: 1650px;
    width: 100%;
    margin: 0 auto;
    padding:0 190px;
    @media ${(prop) => prop.theme.breakpoints.xxl} {
      max-width: 1321px;
      padding-left: 150px;
      padding-right: 150px;
    }
    @media ${(prop) => prop.theme.breakpoints.xl} {
      padding: 0 40px;
    }
  }
`;

export const OverViewTitle = styled.div`
  color: #fff;
  font-family: "MazzardM-SemiBold";
  text-align: start;
  font-family: Mazzard;
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 109.8%;
  padding-bottom: 94px;
  padding-top: 58px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 40px;
    margin: 0 auto;
    padding-bottom: 74px;
    display: flex;
    justify-content: center;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 36px;
    padding-bottom: 42px;
    text-align: center;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 32px;
    padding-bottom: 22px;
    text-align: center;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 28px;
    padding-bottom: 12px;
    text-align: center;
  }
`;

export const TextOfOverView = styled.div`
  color: #a5afbc;
  text-align: justify;
  font-family: "MazzardM-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  padding: 0 387px 122px 0;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
    padding: 0;
    padding-bottom: 74px;
    margin: 0 auto;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 11.2px;
    padding: 0;
    width: 100%;
  }
`;
