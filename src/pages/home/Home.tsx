import { MainSection, LeadingBrandsSection } from "./components";
import DigitalExperience from "./components/DigitalExperience/DigitalExperience";

// import ReactPageScroller from "react-page-scroller";

const Home = () => {
  return (
    <>
      {/* <ReactPageScroller></ReactPageScroller> */}
      <MainSection />

      <LeadingBrandsSection />

      <DigitalExperience />
    </>
  );
};

export default Home;
