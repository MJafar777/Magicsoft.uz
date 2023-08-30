import { styled } from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const ButtonInfoBtn = styled.div<BreacPointsType>`
  position: relative;
  padding: 15px 22px;
  border-radius: 50px;
  border: 1px solid #d4f54c;
  cursor: pointer;

  &:hover {
    border-color: #fff;

    p {
      color: #fff;
    }
  }

  &:hover .primary {
    top: -80px;
    position: absolute;
  }

  &:hover .secondary {
    top: 0px;
    position: relative;
  }
`;

export const ButtonInfoText = styled.p<BreacPointsType>`
  color: #d4f54c;
  font-family: "MazzardM-Regular";
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
`;

export const ButtonChangeBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: transparent;

  overflow: hidden;
`;

export const ButtonPimaryText = styled.p`
  width: 100%;
  position: relative;
  text-align: center;
  top: 0;

  transition: top 0.4s;
  -moz-transition: top 0.4s; // Firefox
  -webkit-transition: top 0.4s; // Safari and Chrome
  -o-transition: top 0.4s; // Opera
  -ms-transition: top 0.4s; // Explorer
`;

export const ButtonSecondaryText = styled.p`
  width: 100%;
  position: absolute;
  text-align: center;
  top: 80px;

  transition: top 0.4s;
  -moz-transition: top 0.4s; // Firefox
  -webkit-transition: top 0.4s; // Safari and Chrome
  -o-transition: top 0.4s; // Opera
  -ms-transition: top 0.4s; // Explorer
`;
