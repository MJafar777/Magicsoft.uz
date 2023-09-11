import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  OurCommunityPageNumber,
  OurCommunityTitle,
  OurCommunityWrapper,
} from "./OurCommunityStyles";

const OurCommunity = () => {
  return (
    <OurCommunityWrapper>
      <OurCommunityPageNumber>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"09"} />
      </OurCommunityPageNumber>
      <OurCommunityTitle>Our Commmunity</OurCommunityTitle>
    </OurCommunityWrapper>
  );
};

export default OurCommunity;
