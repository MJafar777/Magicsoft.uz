import ButtonEscort from "../../components/Buttons/ButtonEscort/ButtonEscort";
import ButtonIfo from "../../components/Buttons/ButtonInfo/ButtonIfo";
import ButtonMagnet from "../../components/Buttons/MagnetikButton/ButtonMagnetik";
import {
  MainSection,
  MainSectionLeft,
  MainSectionRight,
  MainSectionWrapper,
  MainSectionLeftTitle,
  MainSectionLeftPartNumber,
  MainSectionLeftDescription,
  MainSectinLeftButtonsBox,
} from "./HomeStyles";

const Home = () => {
  return (
    <MainSectionWrapper>
      {/* <MainSection>
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
              <ButtonEscort />
            </ButtonMagnet>

            <ButtonIfo />
          </MainSectinLeftButtonsBox>
        </MainSectionLeft>

        <MainSectionRight></MainSectionRight>
      </MainSection> */}
    </MainSectionWrapper>
  );
};

export default Home;
