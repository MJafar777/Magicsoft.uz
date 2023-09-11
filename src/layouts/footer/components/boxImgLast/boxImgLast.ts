import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

interface Props {
  src: string;
  alt: string;
}

export const BoxImgLastWrapper = styled.div<BreacPointsType>`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 110px;
  justify-content: center;
  padding-left: 10%;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    margin-right: 10px;
    flex-direction: row;
    padding-top: 10px;
    padding-left: 10px;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ImgFirst = styled.img<Props, BreacPointsType>`
  width: 170px;
  height: 47px;
  flex-shrink: 0;
  user-select: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 136px;
    height: 37.6px;
  }
`;

export const ImageSecond = styled.img<Props, BreacPointsType>`
  width: 170px;
  height: 47px;
  flex-shrink: 0;
  user-select: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 136px;
    height: 37.6px;
  }
`;
