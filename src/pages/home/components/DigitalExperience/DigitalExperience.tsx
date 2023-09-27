import ButtonEscort from "../../../../components/buttons/buttonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/magnetikButton/ButtonMagnetik";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import {
  MissionLeft,
  MissionRight,
  MissionTitle,
  MissionWrapper,
  MissionDescription,
  MissionRightContaner,
  MissionVideContainer,
  MissionContainerWrapper,
} from "./DigitalExperienceStyles";

import digitialVideo from "../../../../assets/digitial.mp4";

import { borderBigVector } from "../../../../assets/images";
import JobItems from "../../../../components/jobItem/JobItems";
import useLocales from "../../../../locales/useLocales";
import { useNavigate } from "react-router-dom";

const DigitalExperience = () => {
  const { translate } = useLocales();
  const navigate = useNavigate();

  return (
    <MissionContainerWrapper>
      <MissionWrapper>
        <MissionLeft>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"03"} />
          <MissionTitle className="desctop-title">
            {translate("digitialExperienceTitle")}
          </MissionTitle>

          <MissionDescription>
            <p>{translate("digitialExperienceDesc1")}</p>
            <p>{translate("digitialExperienceDesc2")}</p>
          </MissionDescription>

          <div onClick={() => navigate("/fintech")}>
            <ButtonMagnet>
              <ButtonEscort
                text1={translate("moreUpper")}
                text2={translate("moreUpper")}
                arrowOutwardIcon={true}
              />
            </ButtonMagnet>
          </div>
        </MissionLeft>

        <MissionRightContaner>
          <MissionRight>
            <img
              className="border-image"
              src={borderBigVector}
              alt="border vector"
            />

            <MissionVideContainer>
              <video
                loop
                muted
                autoPlay
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  type="video/mp4"
                  src={digitialVideo}
                  data-wf-ignore="true"
                />
              </video>
            </MissionVideContainer>
          </MissionRight>

          <JobItems
            text={translate("productDesign")}
            top={"30%"}
            right={""}
            bottom={""}
            left={"0px"}
          />
          <JobItems
            text={translate("productManagement")}
            top={"15%"}
            right={"0"}
            bottom={""}
            left={""}
          />
          <JobItems
            text={translate("productStrategyAndConsulting")}
            top={""}
            right={""}
            bottom={"10%"}
            left={"0"}
          />
        </MissionRightContaner>

        <MissionTitle className="mobile-title">
          {translate("digitialExperienceTitle")}
        </MissionTitle>
      </MissionWrapper>
    </MissionContainerWrapper>
  );
};

export default DigitalExperience;
