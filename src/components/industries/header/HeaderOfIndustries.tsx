import { Link, useLocation } from "react-router-dom";

import ReactFluidAnimation, {
  IAnimationConfig,
} from "@usertive/react-fluid-animation";

// import { HeaderData as TravelData } from "../../../api/data/travels";
// import { HeaderData as FintechData/ } from "../../../api/data/fintech";
// import { HeaderData as RetailData } from "../../../api/data/retail";

import {
  BaseLinks,
  ContentOfHeader,
  HeaderOfIndustriesWraper,
  HeaderTitle,
  Subtitle,
} from "./HeaderOfIndustriesStyles";

import { useEffect, useState } from "react";
import useLocales from "../../../locales/useLocales";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultConfig: Partial<IAnimationConfig> = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
  colorsPool: [
    "#FF1100",
    "#FF0046",
    "#5D00FF",
    "#0043FF",
    "#0088FF",
    "#00DCFF",
    "#00FFF7",
    "#00FFD4",
    "#00FFA2",
    "#DADADA",
    "#FFFFFF",
  ],
};

const HeaderOfIndustries = () => {
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
    // <CointainerWrapper>
    <HeaderOfIndustriesWraper>
      <ReactFluidAnimation
        style={{
          innerWidth: "100%",
          innerHeight: "100vh",
        }}
        config={defaultConfig}
      />
      <ContentOfHeader>
        <BaseLinks>
          {/* <Link to={"/"}>Home / </Link> */}
          {/* <Link to={"/"}>Industries / </Link> */}
          <Link to={"/"}>{translate(`topHeaderOfTitle${whichIndustry}`)}</Link>
        </BaseLinks>
        <HeaderTitle>{translate(`headerOfTitle${whichIndustry}`)}</HeaderTitle>
        <Subtitle>{translate(`headerOfSubtitle${whichIndustry}`)}</Subtitle>
      </ContentOfHeader>
    </HeaderOfIndustriesWraper>
    // </CointainerWrapper>
  );
};

export default HeaderOfIndustries;
