import styled from "styled-components";

export const NavbarWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 398px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem auto;
  background: #161616;
`;

export const Cards = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background: #161616;
`;
export const Img = styled.img`
  max-width: 50%;
  transform: scaleY(1.2);
`;

export const Title = styled.h3`
  width: 90%;
  color: #fff;
  font-family: Archivo, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%; /* 27.432px */
  text-transform: uppercase;
`;

export const SubTitle = styled.h3`
  color: #fff;
  width: 90%;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  opacity: 0.7;
`;

export const FlexBasedOn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 0.1fr);
  gap: 20px;
  justify-content: flex-start;
`;

export const BasedOn = styled.p`
  display: flex;
  height: 25px;
  padding: 8px 15px;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
`;

export const DateItem = styled.p``;

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

  &:hover img {
    transform: rotateZ(-10deg);
  }
`;
