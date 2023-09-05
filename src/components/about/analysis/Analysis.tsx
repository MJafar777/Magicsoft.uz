import CountUp from "react-countup";
import {
  AnalysisWrapper,
  CardOfAnalysis,
  Subtitle,
  Title,
} from "./AnalysisStyles";

const Analysis = () => {
  return (
    <AnalysisWrapper>
      <CardOfAnalysis>
        <Title>
          <CountUp
            end={100}
            duration={5.75}
            start={0}
            separator="client"
            decimal=","
            suffix=" +"
          />
        </Title>
        <Subtitle>Apps created</Subtitle>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <Title>
          <CountUp
            end={35}
            duration={5.75}
            start={0}
            separator="client"
            decimal=","
            suffix=" +"
          />
        </Title>
        <Subtitle>Employees</Subtitle>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <Title>
          <CountUp
            end={10000}
            duration={5.75}
            start={1000}
            // separator="client"
            decimal=","
            suffix=" +"
          />
        </Title>
        <Subtitle>Positive reviews</Subtitle>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <Title>
          <CountUp
            end={200000}
            duration={5.75}
            start={1000}
            // separator="client"
            decimal=","
            suffix=" +"
          />
        </Title>
        <Subtitle>Title goes here</Subtitle>
      </CardOfAnalysis>
    </AnalysisWrapper>
  );
};

export default Analysis;
