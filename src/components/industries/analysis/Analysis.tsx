import {
  AnalysisWrapper,
  CardOfAnalysis,
  TheFirst,
  TheSecond,
  TheThird,
  ValueOfAnalysis,
  WhichSubject,
} from "./AnalysisStyles";

const Analysis = () => {
  return (
    <AnalysisWrapper>
      <CardOfAnalysis>
        <TheFirst>
          <ValueOfAnalysis>15+</ValueOfAnalysis>
          <WhichSubject>Years of experience</WhichSubject>
        </TheFirst>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <TheSecond>
          <ValueOfAnalysis>100+</ValueOfAnalysis>
          <WhichSubject>Global clients</WhichSubject>
        </TheSecond>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <TheThird>
          <ValueOfAnalysis>120+</ValueOfAnalysis>
          <WhichSubject>Expert developers</WhichSubject>
        </TheThird>
      </CardOfAnalysis>
    </AnalysisWrapper>
  );
};

export default Analysis;
