import { styled } from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

export const ButtonEscortWrapper = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;

  &:hover .primary {
    top: -80px;
    position: absolute;
  }

  &:hover .secondary {
    top: 0px;
    position: relative;
  }
`;

export const ButtonEscortBtn = styled.div<BreacPointsType>`
  min-width: 150px;
  padding: 17px 19px;
  border-radius: 50px;
  background-color: #1b63cc;
  color: #fff;
  cursor: pointer;
`;

export const ButtonEscortText = styled.div<BreacPointsType>`
  font-family: "Concretica";
  font-size: 18px;
  font-weight: 400;
  line-height: 16px;
`;

export const ButtonEscortSircle = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1b63cc;
  color: #fff;
  cursor: pointer;
`;
