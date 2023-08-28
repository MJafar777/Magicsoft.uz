import { Link } from "react-router-dom";
import { BgTravels } from "../../../../assets/industries";
import {
  BaseLinks,
  ContentOfHeader,
  HeaderOfIndustriesWraper,
  HeaderTitle,
  Subtitle,
} from "./HeaderOfIndustriesStyles";

// const defaultConfig: Partial<IAnimationConfig> = {
//   textureDownsample: 1,
//   densityDissipation: 0.98,
//   velocityDissipation: 0.99,
//   pressureDissipation: 0.8,
//   pressureIterations: 25,
//   curl: 30,
//   splatRadius: 0.005,
//   colorsPool: [
//     "#FF1100",
//     "#FF0046",
//     "#5D00FF",
//     "#0043FF",
//     "#0088FF",
//     "#00DCFF",
//     "#00FFF7",
//     "#00FFD4",
//     "#00FFA2",
//     "#DADADA",
//     "#FFFFFF",
//   ],
// };
const HeaderOfIndustries = () => {
  return (
    <>
      <HeaderOfIndustriesWraper imgUrl={BgTravels}>
        <ContentOfHeader>
          <BaseLinks>
            <Link to={"/"}>Home / </Link>
            <Link to={"/"}>Industries / </Link>
            <Link to={"/"}>Travel, Logistics & Hospitality </Link>
          </BaseLinks>
          <HeaderTitle>Travel, Logistics & Hospitality</HeaderTitle>
          <Subtitle>
            Unravel the art and science of converting travelers with
            comprehensive travel technology
          </Subtitle>
        </ContentOfHeader>
      </HeaderOfIndustriesWraper>
    </>
  );
};

export default HeaderOfIndustries;
