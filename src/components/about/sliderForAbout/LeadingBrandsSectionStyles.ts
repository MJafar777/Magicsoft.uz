import { styled } from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const LeadingBrandsImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeadingBrandsTitle = styled.h2<BreacPointsType>`
  font-family: "MazzardM-Semibold";
  color: #fff;
  font-size: 86px;
  font-weight: 600;
  line-height: 95px;
  margin: 90px auto;
  text-align: center;
`;

export const LeadingBrandsNumbers = styled.div<BreacPointsType>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    background-color: #1b63cc;
    margin-right: 8px;
  }

  p {
    color: #aab4c2;
    font-family: "Concretica";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -4px;
  }

  h4 {
    color: #aab4c2;
    font-family: "MazzardM-Semibold";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -4px;
  }
`;

export const LeadingBrandsBox = styled.div`
  height: 126px;
  width: 100%;
  margin: 90px auto;
  background-color: #111;
  gap: 30px;
`;



export const LeadingBrandsCart = styled.div`
  height: 400px;
  width: 500px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: 100% !important;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
  img{
    width: 90%;
    height: 80% !important;
  }
  }
`;
