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

const DigitalExperience = () => {
  return (
    <MissionContainerWrapper>
      <MissionWrapper>
        <MissionLeft>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"06"} />
          <MissionTitle className="desctop-title">
            Digital Experience
          </MissionTitle>

          <MissionDescription>
            <p>
              We use human-centered design to create unique, high-performing
              customer experiences.
            </p>
            <p>
              To keep up in today's fast-paced world, you need to embrace
              digital innovation to create ahead-of-the-curve, memorable
              customer experiences (CX) that set the standard for your audience.
            </p>
          </MissionDescription>

          <ButtonMagnet>
            <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={true} />
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
            text={"Product Design"}
            top={"30%"}
            right={""}
            bottom={""}
            left={"0px"}
          />
          <JobItems
            text={"Product Management"}
            top={"15%"}
            right={"0"}
            bottom={""}
            left={""}
          />
          <JobItems
            text={"Product Strategy and Consulting"}
            top={""}
            right={""}
            bottom={"10%"}
            left={"0"}
          />
        </MissionRightContaner>

        <MissionTitle className="mobile-title">Digital Experience</MissionTitle>
      </MissionWrapper>
    </MissionContainerWrapper>
  );
};

export default DigitalExperience;
