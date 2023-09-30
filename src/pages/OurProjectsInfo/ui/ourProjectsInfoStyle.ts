import styled from "styled-components";
import { BreacPointsType } from "../../../types/breacPointTypes";

interface Props {
  src: string;
  alt: string;
}

export const OurProjectsInfoWrapper = styled.div<BreacPointsType>`
  width: 100%;
  background: #000;
  color: white;
  margin-top: 120px;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 20px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 80px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 60px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
    margin-top: 100px;
  }
`;

export const SecondaryNewsParent = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto;
`;

export const ImageTitle = styled.img<Props>`
  width: 100%;
`;

export const Title = styled.p<BreacPointsType>`
  width: 100%;
  margin: 20px auto;

  color: #fff;
  font-family: "MazzardM-SemiBold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.3%;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 20px auto;
    font-size: 24px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
  }
`;

export const GridBaseOn = styled.div<BreacPointsType>`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 0.1fr);

  gap: 15px;
  margin-top: 60px;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 30px;
  }
`;

export const GridBase = styled.div<BreacPointsType>`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    margin: 10px auto;
  }
`;

export const Info = styled.div<BreacPointsType>`
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

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 14px;
  }
`;

export const Paragraph = styled.p<BreacPointsType>`
  color: #fff;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 14px;
  }
`;

export const TitleBottomBorder = styled.div`
  width: 160px;
  height: 9px;
  flex-shrink: 0;
  background: var(--yellow, #fcd702);
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
  margin-top: 17px;

  &:hover img {
    transform: translateY(-2px) translateX(2px);
    color: #fff;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: translateY(-4px) translateX(4px);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
  }
`;

export const Icon = styled.img<BreacPointsType>`
  width: 25px;
  transform: rotateZ(45deg);
  transition: all 0.1s ease;
  @media ${(props) => props.theme.breakpoints.md} {
    transform: scale(0.9);
  }
`;
