import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/MagnetikButton/ButtonMagnetik";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import {
  DigitalExperienceLeft,
  DigitalExperienceRight,
  DigitalExperienceTitle,
  DigitalExperienceWrapper,
  DigitalExperienceDescription,
  DigitalExperienceRightBorder,
} from "./DigitalExperienceStyles";

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
        <DigitalExperienceRightBorder className="DigitalExperienceRightBorder" />
      </DigitalExperienceRight>
    </DigitalExperienceWrapper>
  );
};

export default DigitalExperience;
