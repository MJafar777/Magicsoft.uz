import styled from "styled-components";

export const PlatformNavbarWrapper = styled.div`
  gap: 2rem;
  width: 90%;
  display: flex;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
`;

export const NavbarLeft = styled.div`
  color: #fff;
  width: 50%;
`;

export const Img = styled.img`
  max-width: 600px;
  width: 50%;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 49px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
  margin-bottom: 20px;
`;

export const SubTitleBottomBorder = styled.div`
  height: 7px;
  width: 100px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #d4f54c;
`;

export const Paragraph = styled.p`
  max-width: 432px;

  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 27.56px */
  font-family: MazzardM-Regular, sans-serif;
  margin: 20px 0;
`;

export const ButtonContact = styled.button`
  color: #000;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 20px;
  font-weight: 600;

  display: inline-flex;
  height: 61px;
  padding: 19px 109px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  box-shadow: 6px 6px 1px #403a16;
  border: none;
  cursor: pointer;
  user-select: none;

  background: #d4f54c;

  &:active {
    box-shadow: 0px 0px 0px #403a16;
    transform: scale(0.99);
  }
`;
