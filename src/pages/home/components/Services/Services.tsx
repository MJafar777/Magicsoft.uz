import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  ServicesLeft,
  ServicesWrapper,
  ServicesLeftItem,
  ServicesLeftTitle,
  ServicesLeftItemTitle,
  ServicesLeftItemNumber,
  ServicesLeftItemDescription,
  ServicesRight,
  ServicesLeftItemBtn,
  ServicesRightImageBox,
} from "./ServicesStyles";

import gif from "../../../../assets/gif.gif";

import { borderVectorServices } from "../../../../assets/images";

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesLeft>
        <ServicesLeftTitle>Our Service</ServicesLeftTitle>
        <ServicesLeftItem>
          <ServicesLeftItemNumber>
            <p>1</p>
          </ServicesLeftItemNumber>
          <div>
            <ServicesLeftItemTitle>Product Engineering</ServicesLeftItemTitle>
            <ServicesLeftItemDescription>
              We provide innovative and reliable engineering solutions over the
              entire product lifecycle while you remain focused on your core
              competencies
            </ServicesLeftItemDescription>
          </div>
        </ServicesLeftItem>

        <ServicesLeftItem>
          <ServicesLeftItemNumber className="yellovNumber">
            <p>2</p>
          </ServicesLeftItemNumber>
          <div>
            <ServicesLeftItemTitle>Data Engineering & AI</ServicesLeftItemTitle>
            <ServicesLeftItemDescription>
              Take your business to unprecedented heights, enhancing
              productivity and optimization through our transformational AI and
              ML capacities.
            </ServicesLeftItemDescription>
          </div>
        </ServicesLeftItem>

        <ServicesLeftItem>
          <ServicesLeftItemNumber>
            <p>3</p>
          </ServicesLeftItemNumber>
          <div>
            <ServicesLeftItemTitle>Cloud Engineering</ServicesLeftItemTitle>
            <ServicesLeftItemDescription>
              Build applications and shift to the cloud in a cost-effective and
              coordinated manner, leveraging our domain expertise, accelerators,
              and frameworks.
            </ServicesLeftItemDescription>
          </div>
        </ServicesLeftItem>

        <ServicesLeftItem>
          <ServicesLeftItemNumber className="yellovNumber">
            <p>4</p>
          </ServicesLeftItemNumber>
          <div>
            <ServicesLeftItemTitle>NextGen Services</ServicesLeftItemTitle>
            <ServicesLeftItemDescription>
              We leverage emerging technologies like blockchain, the metaverse,
              and Web3 to transform how businesses and people interact with each
              other.
            </ServicesLeftItemDescription>
          </div>
        </ServicesLeftItem>

        <ServicesLeftItemBtn>
          <ButtonEscort
            text1={"View All Services"}
            text2={"View All Services"}
            arrowOutwardIcon={true}
          />
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"04"} />
        </ServicesLeftItemBtn>
      </ServicesLeft>
      <ServicesRight>
        <ServicesRightImageBox>
          <img className="gif" src={gif} />

          <img className="gifBorderVector" src={borderVectorServices} />
        </ServicesRightImageBox>
      </ServicesRight>
    </ServicesWrapper>
  );
};

export default Services;
