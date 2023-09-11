import { Comments } from "../../components/about";
import Analysis from "../../components/about/analysis/Analysis";
import { MainSection, LeadingBrandsSection } from "./components";
import DigitalExperience from "./components/DigitalExperience/DigitalExperience";
import OurCommunity from "./components/OurCommunity/OurCommunity";
import OurTechnologies from "./components/OurTechnologies/OurTechnologies";
import Services from "./components/Services/Services";

const Home = () => {
  return (
    <>
      <MainSection />

      <LeadingBrandsSection />

      <DigitalExperience />

      <Services />

      <OurTechnologies />

      <OurCommunity />

      <Analysis />

      <Comments />
    </>
  );
};

export default Home;
