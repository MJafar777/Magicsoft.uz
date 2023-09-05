import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

export const ScrollTopWrapper = styled.div`
  max-width: 130px;
  width: 100%;

  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const Img = styled.img<Props>`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
export const BtnName = styled.p`
  color: #fff;
  text-align: justify;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
