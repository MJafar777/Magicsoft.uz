import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const NavbarWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  background: #161616;
`;

export const Cards = styled.div<BreacPointsType>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background: #161616;

  @media ${(props) => props.theme.breakpoints.xl} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

export const CardLeft = styled.div<BreacPointsType>`
  width: 60%;
  height: 100%;
  padding: 50px 10px;
  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 10px;
  }
`;

export const Img = styled.img<BreacPointsType>`
  max-width: 50%;
  transform: scaleY(1.2);
  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 50%;
    transform: scale(1);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

export const Title = styled.h3<BreacPointsType>`
  text-transform: capitalize;

  color: #fff;
  font-family: "MazzardM-SemiBold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%; /* 27.432px */

  margin-bottom: 22px;

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 18px;
    margin-bottom: 15px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 90%;
    margin: 10px 0;
  }
`;

export const SubTitle = styled.h3<BreacPointsType>`
  width: 90%;
  flex-shrink: 0;

  color: #fff;
  font-family: "MazzardM-Regular", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%; /* 24.804px */

  opacity: 0.7;
  margin-bottom: 15px;

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 90%;
    margin: 10px 0;
  }
`;

export const FlexBasedOn = styled.div<BreacPointsType>`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 0.1fr);
  gap: 20px;
  justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 90%;
  }
`;

export const BasedOn = styled.p<BreacPointsType>`
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
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const DateItem = styled.p``;

export const Icon = styled.img`
  width: 25px;
  transform: rotateZ(45deg);
  transition: all 0.1s ease;
`;

export const SendLinkBtn = styled.p<BreacPointsType>`
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  transition: all 0.5s ease;

  background-color: #474748;
  padding: 10px 15px;

  border-radius: 8px;

  color: #d4f54c;
  font-family: Archivo-Regular, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 137.8%;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover img {
    transform: translateY(-4px) translateX(4px);
    color: #fff;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: translateY(-4px) translateX(4px);
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 90%;
    margin: 10px 0;
  }
`;
