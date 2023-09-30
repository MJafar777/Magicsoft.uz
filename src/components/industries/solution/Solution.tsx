import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Card,
  ContainerOfSolution,
  Content,
  SolutionTitle,
  SolutionWrapper,
  Title,
} from "./SolutionStyles";


import useLocales from "../../../locales/useLocales";

const Solution = () => {
  const loaction = useLocation();

  const { translate } = useLocales();

  const [whichIndustry, setWhichIndustry] = useState("OfTravel");

  useEffect(() => {
    if (loaction.pathname == "/fintech") {
      setWhichIndustry("OfFintech");
    } else if (loaction.pathname == "/travels") {
      setWhichIndustry("OfTravel");
    } else {
      setWhichIndustry("OfRetail");
    }
  }, [loaction.pathname]);
  return (
    <SolutionWrapper>
      {/* <Subtile>
        <span
          style={{
            width: "5px",
            height: "5px",
            display: "block",
            backgroundColor: "rgba(27, 99, 204, 1)",
          }}
        ></span>{" "}
      </Subtile> */}
      <SolutionTitle>
        {translate(`titleOfSolution${whichIndustry}`)}
      </SolutionTitle>
      <ContainerOfSolution>
        <Card bgColor={"black"}>
          <Title>{translate(`titleOfCardOfOneSolution${whichIndustry}`)}</Title>
          <Content>
            {translate(`subtitleOfCardOfOneSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>{translate(`titleOfCardOfTwoSolution${whichIndustry}`)}</Title>
          <Content>
            {translate(`subtitleOfCardOfTwoSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>
            {translate(`titleOfCardOfThreeSolution${whichIndustry}`)}
          </Title>
          <Content>
            {translate(`subtitleOfCardOfThreeSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>
            {translate(`titleOfCardOfFourSolution${whichIndustry}`)}
          </Title>
          <Content>
            {translate(`subtitleOfCardOfFourSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>
            {translate(`titleOfCardOfFiveSolution${whichIndustry}`)}
          </Title>
          <Content>
            {translate(`subtitleOfCardOfFiveSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>{translate(`titleOfCardOfSixSolution${whichIndustry}`)}</Title>
          <Content>
            {translate(`subtitleOfCardOfSixSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>
            {translate(`titleOfCardOfSevenSolution${whichIndustry}`)}
          </Title>
          <Content>
            {translate(`subtitleOfCardOfSevenSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>
            {translate(`titleOfCardOfEightSolution${whichIndustry}`)}
          </Title>
          <Content>
            {translate(`subtitleOfCardOfEightSolution${whichIndustry}`)}
          </Content>
        </Card>

        <Card bgColor={"black"}>
          <Title>
            {translate(`titleOfCardOfNineSolution${whichIndustry}`)}
          </Title>
          <Content>
            {translate(`subtitleOfCardOfNineSolution${whichIndustry}`)}
          </Content>
        </Card>
      </ContainerOfSolution>
    </SolutionWrapper>
  );
};

export default Solution;
