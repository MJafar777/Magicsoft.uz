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
    font-family: Archivo;
    font-size: 49px;
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

export const ContainerImgs = styled.div`
  width: 70%;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const InfoEachWorker = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NameOfWorker = styled.div`
  text-align: center;
  color: yellow;
`;

export const Specialty = styled.div`
  text-align: center;
  color: white;
`;
