import useWindowWidth from "../../hooks/useWindowWidth";
import { Footer } from "../../layouts";
import { HomePageContainer, ScrollPageContainer } from "./HomeStyles";
import { MainSection, LeadingBrandsSection } from "./components";
import DigitalExperience from "./components/DigitalExperience/DigitalExperience";
import Feedback from "./components/Feedback/Feedback";
import Mission from "./components/Mission/Mission";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import OurTechnologies from "./components/OurTechnologies/OurTechnologies";
import Services from "./components/Services/Services";
import SuccessfulProjects from "./components/SuccessfulProjects/SuccessfulProjects";

import ReactPageScroller from "react-page-scroller";
const Home = () => {
  const WWidth = useWindowWidth();

  console.log(WWidth);

  if (WWidth < 1200) {
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
    <HomePageContainer>
      <ReactPageScroller>
        <ScrollPageContainer>
          <MainSection />
        </ScrollPageContainer>

        <ScrollPageContainer className="scrollPageContainerNoPaddingTop">
          <LeadingBrandsSection />
        </ScrollPageContainer>

        <ScrollPageContainer className="scrollPageContainerNoPaddingTop">
          <DigitalExperience />
        </ScrollPageContainer>

        <ScrollPageContainer>
          <Services />
        </ScrollPageContainer>

        <ScrollPageContainer>
          <OurTechnologies />
        </ScrollPageContainer>

        <ScrollPageContainer className="scrollPageContainerNoPaddingTop">
          <Mission />
        </ScrollPageContainer>

        <ScrollPageContainer>
          <OurCommunity />
        </ScrollPageContainer>

        <ScrollPageContainer className="scrollPageContainerNoPaddingTop">
          <SuccessfulProjects />
        </ScrollPageContainer>

        <ScrollPageContainer>
          <Feedback />
        </ScrollPageContainer>

        <ScrollPageContainer>
          <Footer />
        </ScrollPageContainer>
      </ReactPageScroller>
    </HomePageContainer>
  );
};

export default Home;
