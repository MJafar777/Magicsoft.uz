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

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 15px 20px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 10px 13px;
  }
`;

export const ButtonEscortText = styled.div<BreacPointsType>`
  font-family: "Concretica";
  font-size: 18px;
  font-weight: 400;
  line-height: 16px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14.4px;
    font-weight: 400;
    line-height: 12.6px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 12px;
    line-height: 11px;
  }
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

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 42px;
    height: 42px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 30px;
    height: 30px;

    ArrowOutwardIcon {
      font-size: 10px;
    }
  }
`;
