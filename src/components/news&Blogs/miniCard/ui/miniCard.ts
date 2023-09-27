import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const MiniCardWrapper = styled.div`
  max-width: 440px;
  width: 100%;
  margin: 10px 0;
  background-color: #121212;
`;

export const Img = styled.img`
  max-width: 448px;
  width: 100%;
`;

export const Title = styled.p<BreacPointsType>`
  padding: 0 20px;
  margin: 20px auto;

  color: #fff;
  font-family: MazzardM-SemiBold, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 110.3%; /* 26.472px */
  letter-spacing: -0.96px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 16px;
    margin: 15px auto;
    padding: 0 10px;
  }
`;

export const SubTitle = styled.p<BreacPointsType>`
  padding: 0 20px;
  margin: 10px auto;
  width: 100%;

  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const Icon = styled.img<BreacPointsType>`
  width: 25px;
  transform: rotateZ(45deg);
  transition: all 0.1s ease;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 20px;
  }
`;

export const SendLinkBtn = styled.p<BreacPointsType>`
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  transition: all 0.5s ease;

  background-color: #474748;
  padding: 5px 10px;

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
  margin: 15px;

  &:hover img {
    transform: translateY(-4px) translateX(4px);
    color: #fff;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: translateY(-4px) translateX(4px);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 10px auto;
    padding: 0 10px;
  }
`;
