import { styled } from "styled-components";

interface WrapperProp {
  bg?: string;
}

export const OurTeamWrapper = styled.div<WrapperProp>`
  width: 100%;
  height: fit-content;
  margin-top: 146px;
  background-color: #1f2020;
  background-image: url(${(prop) => prop.bg});
  padding: 129px 0 70px 0;
  @media ${(prop) => prop.theme.breakpoints.md} {
    margin-top: 40px;
  }
`;

export const ContentOfTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
  color: white;
  text-align: center;
  h3 {
    font-family: Archivo-Regular;
    font-size: 49px;
    font-style: normal;
    font-weight: 600;
    line-height: 114.3%;
  }

  p {
    font-family: Archivo-Regular;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 137.8%;
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 50%;
    h3 {
      font-size: 39.2px;
    }
    p {
      font-size: 16px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    h3 {
      font-size: 27.2px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 80%;
  }
`;

export const ContainerImgs = styled.div`
  width: 70%;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 85%;
    gap: 43px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 85%;
    gap: 30px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoEachWorker = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${(prop) => prop.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const NameOfWorker = styled.div`
  text-align: center;
  font-family: Archivo-Regular;
  color: yellow;

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 14px;
  }
`;

export const Specialty = styled.div`
  text-align: center;
  color: white;
  font-family: Archivo-Regular;

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 12px;
  }
`;
