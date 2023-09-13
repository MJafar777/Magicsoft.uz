import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

//   sm: "screen and (max-width: 576px)",
//   md: "screen and (max-width: 768px)",
//   lg: "screen and (max-width: 992px)",
//   xl: "screen and (max-width: 1200px)",
//   xxl: "screen and (max-width: 1440px)",

export const PlatformNavbarWrapper = styled.div<BreacPointsType>`
  display: flex;
  margin: 0rem auto;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.xxl} {
    margin: 0;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    gap: 100px;
  }
`;

export const NavbarLeft = styled.div<BreacPointsType>`
  color: #fff;
  width: 50%;
  .center {
    width: 180px;
    height: 60px;
    position: absolute;
    background: #d4f54c;
    &:active {
      transform: scale(0.99);
    }
  }
  .btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 3px solid transparent;
    outline: none;
    transition: 1s ease-in-out;
    box-shadow: 6px 6px 1px #403a16;
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn:hover {
    transition: 1s ease-in-out;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn span {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 20px auto;
    order: 2;
  }
`;

export const Img = styled.img<BreacPointsType>`
  max-width: 600px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 400px;
    margin: 0px auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 500px;
    order: 1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 400px;
  }
`;

export const SubTitle = styled.h2<BreacPointsType>`
  color: #fff;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 49px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 32px;
  }
`;

export const SubTitleBottomBorder = styled.div<BreacPointsType>`
  height: 7px;
  width: 100px;
  flex-shrink: 0;
  background: #d4f54c;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 240px;
  }
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

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 18px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
  }
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
