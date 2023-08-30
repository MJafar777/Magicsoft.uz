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
  margin: 10px auto;
  margin-top: 25px;
  background-color: ${(e) => (e.bg ? e.bg : "#000")};
`;
export const CardsPaddings = styled.div`
  margin: 0px auto;
  padding: 0px 30px;
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
  margin: 15px auto;
`;

export const SubTitle = styled.h3`
  color: #fff;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  margin-left: 5px;

  opacity: 0.7;
`;

export const FlexBasedOn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 0.1fr);
  gap: 20px;
  justify-content: flex-start;
  margin-left: 5px;
  margin-left: 5px;
`;

export const BasedOn = styled.p`
  display: flex;
  height: 25px;
  padding: 8px 15px;
  align-items: center;
  gap: 10px;
  margin-left: 5px;

  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
`;

export const DateItem = styled.p`
  margin-left: 5px;
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

  color: #d4f54c;
  font-family: Archivo, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 137.8%;

  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5px;

  &:hover img {
    transform: rotateZ(-10deg);
  }
`;
