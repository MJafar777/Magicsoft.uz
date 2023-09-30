import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  OverViewTitle,
  OverViewWraper,
  TextOfOverView,
} from "./OverViewStyles";
// import { OverViewData as TravelData } from "../../../api/data/travels";
// import { OverViewData as FintechData } from "../../../api/data/fintech";
// import { OverViewData as RetailData } from "../../../api/data/retail";
import useLocales from "../../../locales/useLocales";

const OverView = () => {
  const loaction = useLocation();
  const { translate } = useLocales();

  // const [data, setData] = useState(FintechData);
  const [whichIndustry, setWhichIndustry] = useState("OfTravel");
  useEffect(() => {
    if (loaction.pathname == "/fintech") {
      // setData(FintechData);
      setWhichIndustry("OfFintech");
    } else if (loaction.pathname == "/travels") {
      // setData(TravelData);
      setWhichIndustry("OfTravel");
    } else {
      // setData(RetailData);
      setWhichIndustry("OfRetail");
    }
  }, [loaction.pathname]);
  
  return (
    <OverViewWraper>
      <div className="content">
        <OverViewTitle>
          {translate(`overviewOfTitle${whichIndustry}`)}
        </OverViewTitle>
        <TextOfOverView>
          {translate(`overviewOfSubtitle${whichIndustry}`)}
        </TextOfOverView>
      </div>
    </OverViewWraper>
  );
};

export default OverView;
