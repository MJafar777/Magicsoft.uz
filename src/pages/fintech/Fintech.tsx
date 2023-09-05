import {
  HeaderOfIndustries,
  OverView,
  Technology,
  Solution,
  Analysis,
} from "../../components/industries";
import { TravelsWrapper } from "../travels/TravelStyles";

const Fintech = () => {
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

export default Fintech;
