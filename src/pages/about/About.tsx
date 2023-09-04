import {
  AnalysisAbout,
  Baner,
  HeaderOfAbout,
  OurTeam,
} from "../../components/about";
import Comments from "../../components/about/comments/Comments";
import Contact from "../../components/about/contacts/Contact";
import LeadingBrands from "../../components/about/sliderForAbout/LeadingBrands";

import { AboutWrapper } from "./AboutStyles";

const About = () => {
  return (
    <AboutWrapper>
      <HeaderOfAbout />
      <AnalysisAbout />
      <Baner />
      <OurTeam />
      <LeadingBrands />
      <Comments />
      <Contact />
    </AboutWrapper>
  );
};

export default About;
