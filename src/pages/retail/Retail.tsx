import {
  Analysis,
  HeaderOfIndustries,
  OverView,
  Solution,
  Technology,
} from "../../components/industries";
import { TravelsWrapper } from "../travels/TravelStyles";

const Retail = () => {
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

export default Retail;
