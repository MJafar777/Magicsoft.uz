import {
  AnalysisAbout,
  Baner,
  HeaderOfAbout,
  OurTeam,
} from "../../components/about";
import { AboutWrapper } from "./AboutStyles";

const About = () => {
  return (
    <AboutWrapper>
      <HeaderOfAbout />
      <AnalysisAbout />
      <Baner />
      <OurTeam />
    </AboutWrapper>
  );
};

export default About;
