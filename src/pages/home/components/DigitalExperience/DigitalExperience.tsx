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
  DigitalExperienceContainerWrapper,
} from "./DigitalExperienceStyles";

import digitialVideo from "../../../../assets/digitial.mp4";

const DigitalExperience = () => {
  return (
    <DigitalExperienceContainerWrapper>
      <DigitalExperienceWrapper>
        <DigitalExperienceLeft>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"03"} />
          <DigitalExperienceTitle className="desctop-title">
            Digital Experience
          </DigitalExperienceTitle>

          <DigitalExperienceDescription>
            <p>
              We use human-centered design to create unique, high-performing
              customer experiences.
            </p>
            <p>
              To keep up in today's fast-paced world, you need to embrace
              digital innovation to create ahead-of-the-curve, memorable
              customer experiences (CX) that set the standard for your audience.
            </p>
          </DigitalExperienceDescription>

          <ButtonMagnet>
            <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
          </ButtonMagnet>
        </DigitalExperienceLeft>

        <DigitalExperienceRight>
          <DigitalExperienceTitle className="mobile-title">
            Digital Experience
          </DigitalExperienceTitle>

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
        </DigitalExperienceRight>
      </DigitalExperienceWrapper>
    </DigitalExperienceContainerWrapper>
  );
};

export default DigitalExperience;
