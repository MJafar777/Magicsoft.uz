import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

interface Props {
  src: string;
  alt: string;
}

export const TitleLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img<Props>`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;
export const TitleLogoName = styled.p<BreacPointsType>`
  color: #fff;
  text-align: justify;
  font-family: MazzardH-Medium;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${(props) => props.theme.breakpoints.xl} {
    
  }
`;
