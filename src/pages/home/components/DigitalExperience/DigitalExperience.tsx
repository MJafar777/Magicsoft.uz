import ButtonEscort from "../../../../components/buttons/buttonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/magnetikButton/ButtonMagnetik";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import {
  DigitalExperienceLeft,
  DigitalExperienceRight,
  DigitalExperienceTitle,
  DigitalExperienceWrapper,
  DigitalExperienceDescription,
  DigitalExperienceVideContainer,
} from "./DigitalExperienceStyles";

import digitialVideo from "../../../../assets/digitial.mp4";

import { borderBigVector } from "../../../../assets/images";
import JobItems from "../../../../components/jobItem/JobItems";

const DigitalExperience = () => {
  return (
    <DigitalExperienceWrapper>
      <DigitalExperienceLeft>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"03"} />
        <DigitalExperienceTitle>Digital Experience</DigitalExperienceTitle>

        <DigitalExperienceDescription>
          <p>
            We use human-centered design to create unique, high-performing
            customer experiences.
          </p>
          <p>
            To keep up in today's fast-paced world, you need to embrace digital
            innovation to create ahead-of-the-curve, memorable customer
            experiences (CX) that set the standard for your audience.
          </p>
        </DigitalExperienceDescription>

        <ButtonMagnet>
          <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
        </ButtonMagnet>
      </DigitalExperienceLeft>

      <DigitalExperienceRight>
        <DigitalExperienceVideContainer>
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
        </DigitalExperienceVideContainer>

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
      </DigitalExperienceRight>
    </DigitalExperienceWrapper>
  );
};

export default DigitalExperience;
