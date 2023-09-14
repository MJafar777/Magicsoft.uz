import useWindowWidth from "../../hooks/useWindowWidth";
import { Footer } from "../../layouts";
import { MainSection, LeadingBrandsSection } from "./components";
import DigitalExperience from "./components/DigitalExperience/DigitalExperience";
import Feedback from "./components/Feedback/Feedback";
import Mission from "./components/Mission/Mission";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import { OurCommunityCotainerWrapper } from "./components/OurCommunity/OurCommunityStyles";
import OurTechnologies from "./components/OurTechnologies/OurTechnologies";
import Services from "./components/Services/Services";
import SuccessfulProjects from "./components/SuccessfulProjects/SuccessfulProjects";

import ReactPageScroller from "react-page-scroller";
const Home = () => {
  const WWidth = useWindowWidth();

  console.log(WWidth);

  if (WWidth < 1201) {
    return (
      <>
        <MainSection />

        <LeadingBrandsSection />

        <DigitalExperience />

        <Services />

        <OurTechnologies />

        <Mission />

        <OurCommunity />

        <SuccessfulProjects />

        <Feedback />

        <Footer />
      </>
    );
  }

  return (
    <ReactPageScroller>
      <MainSection />

      <LeadingBrandsSection />

      <DigitalExperience />

      <Services />

      <OurTechnologies />

      <Mission />

      <OurCommunity />

      <SuccessfulProjects />

      <Feedback />

      <OurCommunityCotainerWrapper>
        <Footer />
      </OurCommunityCotainerWrapper>
    </ReactPageScroller>
  );
};

export default Home;
