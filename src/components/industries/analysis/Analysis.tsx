import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AnalysisWrapper,
  CardOfAnalysis,
  TheFirst,
  TheSecond,
  TheThird,
  ValueOfAnalysis,
  WhichSubject,
} from "./AnalysisStyles";
import { AnalysisData as TravelData } from "../../../api/data/travels";
import { AnalysisData as FintechData } from "../../../api/data/fintech";
import { AnalysisData as RetailData } from "../../../api/data/retail";
import useLocales from "../../../locales/useLocales";

const Analysis = () => {
  const loaction = useLocation();
  const { translate } = useLocales();
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
    <AnalysisWrapper>
      <CardOfAnalysis>
        <TheFirst>
          <ValueOfAnalysis>{data.year.value}</ValueOfAnalysis>
          <WhichSubject>{translate("subTileOfAnalisOneOfTravel")}</WhichSubject>
        </TheFirst>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <TheSecond>
          <ValueOfAnalysis>
            <CountUp
              end={parseInt(data.client.value)}
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
          <WhichSubject>{translate("subTileOfAnalisTwoOfTravel")}</WhichSubject>
        </TheSecond>
      </CardOfAnalysis>

      <CardOfAnalysis>
        <TheThird>
          <ValueOfAnalysis>
            <CountUp
              end={parseInt(data.developer.value)}
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
          <WhichSubject>
            {translate("subTileOfAnalisThreeOfTravel")}
          </WhichSubject>
        </TheThird>
      </CardOfAnalysis>
    </AnalysisWrapper>
  );
};

export default Analysis;
