import ButtonIfo from "../../../../components/buttons/ButtonInfo/ButtonIfo";
import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/MagnetikButton/ButtonMagnetik";
import {
  MainSectionLeft,
  MainSectionRight,
  MainSectionWrapper,
  MainSectionLeftTitle,
  MainSectionContainer,
  MainSectinLeftButtonsBox,
  MainSectionLeftDescription,
} from "./MainSectionStyles";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import { mainImage } from "../../../../assets/images";

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <MainSectionContainer>
        <MainSectionLeft>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"01"} />

          <MainSectionLeftTitle>
            Hire the Top of{" "}
            <span className="MainSectionLeftTitleYellow">Professional</span>{" "}
            <span className="MainSectionLeftTitleGreen">Software</span> Engineer
          </MainSectionLeftTitle>

          <MainSectionLeftDescription>
            MagicSoft is an exclusive group of the top software developers,
            designers, finance experts, product managers, and project managers
            in the world.
          </MainSectionLeftDescription>

          <MainSectinLeftButtonsBox>
            <ButtonMagnet>
              <ButtonEscort
                text1="Hire Top Engineers"
                text2="Hire Top Engineers"
                arrowOutwardIcon={true}
              />
            </ButtonMagnet>

            <ButtonIfo />
          </MainSectinLeftButtonsBox>
        </MainSectionLeft>

        <MainSectionRight>
          <img src={mainImage} alt="" />
        </MainSectionRight>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
};

export default MainSection;
