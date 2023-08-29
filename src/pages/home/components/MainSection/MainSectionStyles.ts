import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const MainSectionWrapper = styled.div<BreacPointsType>`
  padding-top: 111px;
  max-width: 1652px;
  margin: 0 auto;
`;

export const MainSectionContainer = styled.section<BreacPointsType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111114;
  margin: 30px auto;
  padding: 100px 155px 54px 155px;
  border-radius: 48px 48px 0px 0px;
`;

export const MainSectionLeft = styled.div<BreacPointsType>``;

export const MainSectionLeftPartNumber = styled.div<BreacPointsType>`
  display: flex;
  align-items: flex-end;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    background-color: #1b63cc;
    margin-right: 8px;
  }

  p {
    margin-bottom: -6px;
    color: #aab4c2;
  }
`;

export const MainSectionLeftTitle = styled.h2<BreacPointsType>`
  max-width: 770px;
  color: #fff;
  font-family: "MazzardM-Semibold";
  font-size: 86px;
  font-weight: 600;
  line-height: 100px;
  margin: 40px 0;

  .MainSectionLeftTitleYellow {
    text-decoration: underline;
    text-decoration-color: #d4f54c;
  }

  .MainSectionLeftTitleGreen {
    text-decoration: underline;
    text-decoration-color: #1b63cc;
  }
`;

export const MainSectionLeftDescription = styled.p<BreacPointsType>`
  color: #a5afbc;
  font-family: "MazzardM-Regular";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  max-width: 565px;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

export const MainSectinLeftButtonsBox = styled.div<BreacPointsType>`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const MainSectionRight = styled.section<BreacPointsType>``;

export const MainSectionAnimation = styled.section<BreacPointsType>``;
