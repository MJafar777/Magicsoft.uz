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
} from "./MissionStyles";

import digitialVideo from "../../../../assets/digitial.mp4";

import useLocales from "../../../../locales/useLocales";
import { borderBigVector } from "../../../../assets/images";
import JobItems from "../../../../components/jobItem/JobItems";

const Mission = () => {
  const { translate } = useLocales();

  return (
    <MissionContainerWrapper>
      <MissionWrapper>
        <MissionLeft>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"06"} />
          <MissionTitle className="desctop-title">
            {translate("thisIsOur")} <span>{translate("mission")}</span>
          </MissionTitle>

          <MissionDescription>
            <p>{translate("missionTitle1")}</p>
            <p>{translate("missionTitle2")}</p>
          </MissionDescription>

          <ButtonMagnet>
            <ButtonEscort
              text1={translate("MORE")}
              text2={translate("MORE")}
              arrowOutwardIcon={true}
            />
          </ButtonMagnet>
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
          {translate("thisIsOur")} <span>{translate("mission")}</span>
        </MissionTitle>
      </MissionWrapper>
    </MissionContainerWrapper>
  );
};

export default Mission;
