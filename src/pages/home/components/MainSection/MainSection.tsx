import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import ButtonIfo from "../../../../components/buttons/ButtonInfo/ButtonIfo";
import ButtonMagnet from "../../../../components/buttons/MagnetikButton/ButtonMagnetik";
import {
  MainSectionContainer,
  MainSectionLeft,
  MainSectionRight,
  MainSectionWrapper,
  MainSectionLeftTitle,
  MainSectionLeftPartNumber,
  MainSectionLeftDescription,
  MainSectinLeftButtonsBox,
} from "./MainSectionStyles";

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <MainSectionContainer>
        <MainSectionLeft>
          <MainSectionLeftPartNumber>
            <span></span>
            <p>01</p>
            <p>/</p>
            <p>12</p>
          </MainSectionLeftPartNumber>

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

        <MainSectionRight></MainSectionRight>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
};

export default MainSection;
