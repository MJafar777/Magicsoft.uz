
import { Analysis, HeaderOfIndustries, OverView, Solution, Technology } from "../../components/industries";
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
