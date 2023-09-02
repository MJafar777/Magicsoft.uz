import styled from "styled-components";

export const MiniCardWrapper = styled.div`
  max-width: 340px;
  width: 100%;
  margin: 10px 0;
  background-color: #121212;
`;

export const Img = styled.img`
  max-width: 348px;
  width: 100%;
`;

export const Title = styled.p`
  padding: 0 20px;
  margin: 20px auto;

  color: #fff;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 110.3%; /* 26.472px */
  letter-spacing: -0.96px;
`;

export const SubTitle = styled.p`
  padding: 0 20px;
  margin: 10px auto;
  width: 100%;

  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 137.8%;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  margin: 30px auto;

  &:hover img {
    transform: translateY(-4px) translateX(4px);
    color: #fff;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: translateY(-4px) translateX(4px);
  }
`;
