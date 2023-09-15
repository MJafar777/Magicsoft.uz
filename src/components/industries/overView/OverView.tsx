import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  OverViewTitle,
  OverViewWraper,
  TextOfOverView,
} from "./OverViewStyles";
import { OverViewData as TravelData } from "../../../api/data/travels";
import { OverViewData as FintechData } from "../../../api/data/fintech";
import { OverViewData as RetailData } from "../../../api/data/retail";

const OverView = () => {
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
    <OverViewWraper>
      <div className="content">
        <OverViewTitle>{data.title}</OverViewTitle>
        <TextOfOverView>{data.text}</TextOfOverView>
      </div>
    </OverViewWraper>
  );
};

export default OverView;
