import { MainSection, LeadingBrandsSection } from "./components";
import DigitalExperience from "./components/DigitalExperience/DigitalExperience";
import Feedback from "./components/Feedback/Feedback";
import Mission from "./components/Mission/Mission";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import OurTechnologies from "./components/OurTechnologies/OurTechnologies";
import Services from "./components/Services/Services";
import SuccessfulProjects from "./components/SuccessfulProjects/SuccessfulProjects";

const Home = () => {
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
    </>
  );
};

export default Home;
