import {
  MainSectionLeft,
  MainSectionRight,
  MainSectionWrapper,
  MainSectionContainer,
  MainSectionAnimation,
  MainSectionLeftTitle,
  MainSectinLeftButtonsBox,
  MainSectionLeftDescription,
} from "./MainSectionStyles";

import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import mainAnim from "../../../../assets/mainAnim.mp4";
import JobItems from "../../../../components/jobItem/JobItems";

import {
  ButtonInfo,
  ButtonMagnet,
  ButtonEscort,
} from "../../../../components/buttons";

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

          <div className="mainSectionDesctopBox">
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

              <ButtonInfo text1={"Why MagicSoft?"} text2={"Why MagicSoft?"} />
            </MainSectinLeftButtonsBox>
          </div>
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

        <div className="mainSectionMobileBox">
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

            <ButtonInfo text1={"Why MagicSoft?"} text2={"Why MagicSoft?"} />
          </MainSectinLeftButtonsBox>
        </div>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
};

export default MainSection;
