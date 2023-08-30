import {
  ContainerOfSolution,
  SolutionTitle,
  SolutionWrapper,
  Subtile,
} from "./SolutionStyles";
import CardOne from "./Card";
import { SolutionData as TravelData } from "../../../api/data/travels";
import { SolutionData as FintechData } from "../../../api/data/fintech";
import { SolutionData as RetailData } from "../../../api/data/retail";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Solution = () => {

  const loaction = useLocation();
  const [data, setData] = useState(FintechData);

  useEffect(() => {
    if (loaction.pathname == "/fintech") {
      setData(FintechData);
    } else if (loaction.pathname == "/travels") {
      setData(TravelData);
    } else {
      setData(RetailData);
    }
  }, [loaction.pathname]);

  return (
    <SolutionWrapper>
      <Subtile>
        <span
          style={{
            width: "5px",
            height: "5px",
            display: "block",
            backgroundColor: "rgba(27, 99, 204, 1)",
          }}
        ></span>{" "}
        Solutions
      </Subtile>
      <SolutionTitle>
        {data.title}
        {/* Our Hospitality and Travel Software Solutions */}
      </SolutionTitle>
      <ContainerOfSolution>
        {data.listOfSolution.map((solution) => {
          return (
            <CardOne
              title={solution.title}
              content={solution.content}
              bgColor={solution.bgColor}
            />
          );
        })}
      </ContainerOfSolution>
    </SolutionWrapper>
  );
};

export default Solution;
