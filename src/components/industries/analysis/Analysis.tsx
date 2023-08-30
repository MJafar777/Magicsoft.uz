import CountUp from "react-countup";

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
          <ValueOfAnalysis>
            <CountUp
              end={100}
              duration={10.75}
              start={0}
              separator="client"
              // decimals={4}
              decimal=","
              // prefix="EUR "
              suffix=" +"
              onEnd={() => console.log("Ended! 👏")}
              onStart={() => console.log("Started! 💨")}
            />
          </ValueOfAnalysis>
          <WhichSubject>Global clients</WhichSubject>
        </TheSecond>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <TheThird>
          <ValueOfAnalysis>
          <CountUp
              end={120}
              duration={10.75}
              start={5}
              separator="developers"
              // decimals={4}
              decimal=","
              // prefix="EUR "
              suffix=" +"
              onEnd={() => console.log("Ended! 👏")}
              onStart={() => console.log("Started! 💨")}
            />
            </ValueOfAnalysis>
          <WhichSubject>Expert developers</WhichSubject>
        </TheThird>
      </CardOfAnalysis>
    </AnalysisWrapper>
  );
};

export default Analysis;
