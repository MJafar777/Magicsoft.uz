import Analysis from "../../components/industries/analysis/Analysis";
import HeaderOfIndustries from "../../components/industries/header/Hearder/HeaderOfIndustries";
import OverView from "../../components/industries/overView/OverView";
import Solution from "../../components/industries/solution/Solution";
import Technology from "../../components/industries/technology/Technology";
import { TravelsWrapper } from "./TravelStyles";

const Travels = () => {
  return (
    <TravelsWrapper>
      <HeaderOfIndustries />
      <OverView />
      <Technology />
      <Solution />
      <Analysis />
    </TravelsWrapper>
  );
};

export default Travels;
