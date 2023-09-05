import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

export const BoxImgLastWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 110px;
  justify-content: center;
  padding-left: 10%;
  margin-bottom: 10px;
`;

export const ImgFirst = styled.img<Props>`
  width: 170px;
  height: 47px;
  flex-shrink: 0;
  user-select: none;
`;

export const ImageSecond = styled.img<Props>`
  width: 170px;
  height: 47px;
  flex-shrink: 0;
  user-select: none;
`;
