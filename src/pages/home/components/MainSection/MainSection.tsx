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

import { HeaderReplace } from "../../HomeStyles";
import useLocales from "../../../../locales/useLocales";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const { translate } = useLocales();
  const navigate = useNavigate();

  return (
    <>
      <HeaderReplace />

      <MainSectionWrapper>
        <MainSectionContainer>
          <MainSectionLeft>
            <PageSectionNumber fullPageNumber={12} currentPageNumber={"01"} />

            <MainSectionLeftTitle>
              {translate("homeMainTitleTop")}{" "}
              <span className="MainSectionLeftTitleYellow">
                {translate("homeMainTitleLeft")}
              </span>{" "}
              <span className="MainSectionLeftTitleGreen">
                {translate("homeMainTitleRight")}
              </span>{" "}
              {translate("homeMainTitleButtom")}
            </MainSectionLeftTitle>

            <div className="mainSectionDesctopBox">
              <MainSectionLeftDescription>
                {translate("homeMainDesc")}
              </MainSectionLeftDescription>

              <MainSectinLeftButtonsBox>
                <div onClick={() => navigate("/contact")}>
                  <ButtonMagnet>
                    <ButtonEscort
                      text1={translate("hireTopEngineers")}
                      text2={translate("hireTopEngineers")}
                      arrowOutwardIcon={true}
                    />
                  </ButtonMagnet>
                </div>

                <div onClick={() => navigate("/about-us")}>
                  <ButtonInfo
                    text1={translate("whyMagicSoft")}
                    text2={translate("whyMagicSoft")}
                  />
                </div>
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
              text={translate("financeExperts")}
              top={"20%"}
              right={""}
              bottom={""}
              left={"0px"}
            />
            <JobItems
              text={translate("projectManagers")}
              top={""}
              right={""}
              bottom={"10%"}
              left={"30px"}
            />
            <JobItems
              text={translate("softwareEngineers")}
              top={"50%"}
              right={"-20px"}
              bottom={""}
              left={""}
            />
          </MainSectionRight>

          <div className="mainSectionMobileBox">
            <MainSectionLeftDescription>
              {translate("homeMainDesc")}
            </MainSectionLeftDescription>

            <MainSectinLeftButtonsBox>
              <ButtonMagnet>
                <ButtonEscort
                  text1={translate("hireTopEngineers")}
                  text2={translate("hireTopEngineers")}
                  arrowOutwardIcon={true}
                />
              </ButtonMagnet>

              <ButtonInfo
                text1={translate("whyMagicSoft")}
                text2={translate("whyMagicSoft")}
              />
            </MainSectinLeftButtonsBox>
          </div>
        </MainSectionContainer>
      </MainSectionWrapper>
    </>
  );
};

export default MainSection;
