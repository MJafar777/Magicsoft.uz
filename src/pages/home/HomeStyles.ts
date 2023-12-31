import { styled } from "styled-components";
import { BreacPointsType } from "../../types/breacPointTypes";

export const HomePageContainer = styled.section<BreacPointsType>`
  .scrollPageContainerNoPaddingTop {
    padding-top: 0px !important;
  }
`;

export const ScrollPageContainer = styled.section<BreacPointsType>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 111px;
`;

export const HeaderReplace = styled.div<BreacPointsType>`
  height: 111px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 88px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    height: 54px;
  }
`;
