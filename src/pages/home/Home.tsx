import { MainSection, LeadingBrandsSection } from "./components";
import DigitalExperience from "./components/DigitalExperience/DigitalExperience";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import Services from "./components/Services/Services";

const Home = () => {
  return (
    <>
      <MainSection />

      <LeadingBrandsSection />

      <DigitalExperience />

      <Services />

      <OurCommunity />
    </>
  );
};

export default Home;
