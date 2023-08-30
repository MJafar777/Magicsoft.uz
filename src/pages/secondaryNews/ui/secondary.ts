import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

export const SecondaryNewsWrapper = styled.div`
  width: 100%;
  background: #000;
  color: white;
`;
export const SecondaryNewsParent = styled.div`
  max-width: 897px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
`;
export const ImageTitle = styled.img<Props>`
  width: 100%;
`;
export const Title = styled.p`
  width: 95%;
  margin: 20px auto;

  color: #fff;
  font-family: Mazzard, sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
`;
export const GridBaseOn = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 0.1fr);
  gap: 20px;
`;
export const Info = styled.div`
  padding: 5px 10px;
  color: #fff;

  border-radius: 3.36px;
  background: rgba(255, 255, 255, 0.1);

  display: flex;
  height: 19.04px;
  padding: 4.48px 5.6px;
  align-items: center;
  gap: 5.6px;

  font-family: Mazzard, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
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
