import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

interface Props {
  src: string;
  alt: string;
}

export const ScrollTopWrapper = styled.div`
  width: 100%;
  max-width: 130px;

  gap: 12px;
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
`;
export const Img = styled.img<Props>`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
export const BtnName = styled.p<BreacPointsType>`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  text-align: justify;
  line-height: normal;
  font-family: "MazzardM-SemiBold", sans-serif;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;
