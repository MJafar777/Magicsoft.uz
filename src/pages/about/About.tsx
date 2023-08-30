import { AnalysisAbout, Baner, HeaderOfAbout } from "../../components/about";
import { AboutWrapper } from "./AboutStyles";

const About = () => {
  return (
    <AboutWrapper>
      <HeaderOfAbout />
      <AnalysisAbout />
      <Baner />
    </AboutWrapper>
  );
};

export default About;
