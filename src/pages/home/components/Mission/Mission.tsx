import ButtonEscort from "../../../../components/buttons/buttonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/magnetikButton/ButtonMagnetik";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import {
  MissionLeft,
  MissionRight,
  MissionTitle,
  MissionWrapper,
  MissionDescription,
  MissionVideContainer,
} from "./MissionStyles";

import digitialVideo from "../../../../assets/digitial.mp4";

import { borderBigVector } from "../../../../assets/images";
import JobItems from "../../../../components/jobItem/JobItems";

const Mission = () => {
  return (
    <MissionWrapper>
      <MissionLeft>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"06"} />
        <MissionTitle>
          This is our <span>mission</span>
        </MissionTitle>

        <MissionDescription>
          <p>
            To be the trusted digital partner and drive transformational
            outcomes for our customers, and empower our employees to achieve
            their full potential.
          </p>
          <p>
            To keep up in today's fast-paced world, you need to embrace digital
            innovation to create ahead-of-the-curve, memorable customer
            experiences (CX) that set the standard for your audience.
          </p>
        </MissionDescription>

        <ButtonMagnet>
          <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={true} />
        </ButtonMagnet>
      </MissionLeft>

      <MissionRight>
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

        <img src={borderBigVector} alt="border vector" />

        <JobItems
          text={"Product Design"}
          top={"40%"}
          right={""}
          bottom={""}
          left={"-50px"}
        />
        <JobItems
          text={"Product Strategy  Consultingn"}
          top={""}
          right={""}
          bottom={"20%"}
          left={"-50px"}
        />
        <JobItems
          text={"Product Management"}
          top={"20%"}
          right={""}
          bottom={""}
          left={""}
        />
      </MissionRight>
    </MissionWrapper>
  );
};

export default Mission;
