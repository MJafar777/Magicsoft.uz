import {
  AnalysisWrapper,
  CardOfAnalysis,
  ValueOfAnalysis,
  WhichSubject,
} from "./AnalysisStyles";

const Analysis = () => {
  return (
    <AnalysisWrapper>
      <CardOfAnalysis>
        <ValueOfAnalysis>15+</ValueOfAnalysis>
        <WhichSubject>Years of experience</WhichSubject>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <ValueOfAnalysis>100+</ValueOfAnalysis>
        <WhichSubject>Global clients</WhichSubject>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <ValueOfAnalysis>120+</ValueOfAnalysis>
        <WhichSubject>Expert developers</WhichSubject>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </CardOfAnalysis>
    </AnalysisWrapper>
  );
};

export default Analysis;
