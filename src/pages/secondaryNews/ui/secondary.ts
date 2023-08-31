import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

export const SecondaryNewsWrapper = styled.div`
  width: 100%;
  background: #000;
  color: white;
  margin-top: 120px;
`;

export const SecondaryNewsParent = styled.div`
  max-width: 897px;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
`;

export const ImageTitle = styled.img<Props>`
  width: 100%;
`;

export const Title = styled.p`
  width: 100%;
  margin: 20px auto;

  color: #fff;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;

  margin: 30px auto;
`;

export const GridBaseOn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 0.1fr);
  gap: 15px;
  margin-top: 60px;
`;

export const Info = styled.div`
  color: #fff;
  font-family: Archivo-Regular, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  display: flex;
  height: 34px;
  padding: 8px 10px;
  align-items: center;

  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
`;

export const Paragraph = styled.p`
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  width: 100%;
`;

export const TitleBottomBorder = styled.div`
  width: 160px;
  height: 9px;
  flex-shrink: 0;
  background: var(--yellow, #fcd702);
  border-radius: 8px;
`;
