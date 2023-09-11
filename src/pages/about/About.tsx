import {
  AnalysisAbout,
  Baner,
  HeaderOfAbout,
  OurTeam,
  SliderOfWorkers,
  Contact,
  Comments,
} from "../../components/about";
import { AboutWrapper } from "./AboutStyles";

const About = () => {
  return (
    <AboutWrapper>
      <HeaderOfAbout />
      <AnalysisAbout />
      <Baner />
      <OurTeam />
      <SliderOfWorkers />
      <Comments />
      <Contact />
    </AboutWrapper>
  );
};

export default About;
