import EachTechnology from "./EachTechnology";
import {
  ContainerInovationSkils,
  TechnologyWrapper,
  TitleInovation,
} from "./TechnologyStyles";

import { TechnologyData, TechnologyData as TravelData } from "../../../api/data/travels";
import { TechnologyData as FintechData } from "../../../api/data/fintech";
import { TechnologyData as RetailData } from "../../../api/data/retail";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Technology = () => {
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
    <TechnologyWrapper>
      <TitleInovation>{TechnologyData.title}</TitleInovation>
      <ContainerInovationSkils>
        {data.listOfSkil?.map((oneSkil) => {
          return (
            <EachTechnology
              title={oneSkil.title}
              info={oneSkil.content}
              id={oneSkil.id}
            />
          );
        })}
      </ContainerInovationSkils>
    </TechnologyWrapper>
  );
};

export default Technology;
