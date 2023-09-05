import ButtonIfo from "../../../../components/buttons/ButtonInfo/ButtonIfo";
import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import {
  MainSectionLeft,
  MainSectionRight,
  MainSectionWrapper,
  MainSectionLeftTitle,
  MainSectionContainer,
  MainSectinLeftButtonsBox,
  MainSectionLeftDescription,
  MainSectionAnimation,
} from "./MainSectionStyles";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import mainAnim from "../../../../assets/mainAnim.mp4";
import JobItems from "../../../../components/jobItem/JobItems";
import ButtonMagnet from "../../../../components/buttons/MagnetikButton/ButtonMagnetik";

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
          <MainSectionAnimation>
            <video
              loop
              muted
              autoPlay
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source type="video/mp4" src={mainAnim} data-wf-ignore="true" />
            </video>
          </MainSectionAnimation>
          <JobItems
            text={"Finance Experts"}
            top={"20%"}
            right={""}
            bottom={""}
            left={"0px"}
          />
          <JobItems
            text={"Project Managers"}
            top={""}
            right={""}
            bottom={"10%"}
            left={"30px"}
          />
          <JobItems
            text={"Software engineers"}
            top={"50%"}
            right={"-20px"}
            bottom={""}
            left={""}
          />
        </MainSectionRight>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
};

export default MainSection;
