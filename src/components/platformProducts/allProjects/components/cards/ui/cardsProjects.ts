import styled from "styled-components";
interface Props {
  width: number;
  bg?: string;
}

export const CardsProjectWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;

export const Cards = styled.div<Props>`
  max-width: ${(e) => (e.width ? e.width : 614)}px;
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
  background-color: ${(e) => (e.bg ? e.bg : "#000")};
`;

export const CardsPaddings = styled.div`
  margin: 0px auto;
  padding: 30px;
`;

export const Img = styled.img`
  /* max-width: 600px; */
  width: 100%;
`;

export const Title = styled.h3`
  color: #fff;
  font-family: MazzardM-Semibold, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.3%;
  text-transform: capitalize;
  margin: 0 auto;
  margin-bottom: 17px;
`;

export const SubTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 137.8%;
  font-family: MazzardM-Regular, sans-serif;
  margin-bottom: 13px;

  opacity: 0.7;
`;

export const FlexBasedOn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 0.1fr);
  gap: 15px;
  justify-content: left;
`;

export const BasedOn = styled.p`
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

export const DateItem = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 137.8%; /* 19.292px */
  font-family: Archivo-Regular, sans-serif;
  margin-top: 15px;
`;

export const Icon = styled.img`
  width: 25px;
  transform: rotateZ(45deg);
  transition: all 0.1s ease;
`;

export const SendLinkBtn = styled.p`
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  transition: all 0.5s ease;

  color: #d4f54c;
  font-family: Archivo-Regular, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 137.8%;

  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 17px;

  &:hover img {
    transform: translateY(-4px) translateX(4px);
    color: #fff;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: translateY(-4px) translateX(4px);
  }
`;
