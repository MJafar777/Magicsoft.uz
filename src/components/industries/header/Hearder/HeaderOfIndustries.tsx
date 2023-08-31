import { Link, useLocation } from "react-router-dom";

import ReactFluidAnimation, {
  IAnimationConfig,
} from "@usertive/react-fluid-animation";

// import { BgTravels } from "../../../../assets/industries";
import { HeaderData as TravelData } from "../../../../api/data/travels";
import { HeaderData as FintechData } from "../../../../api/data/fintech";
import { HeaderData as RetailData } from "../../../../api/data/retail";

import {
  BaseLinks,
  ContentOfHeader,
  HeaderOfIndustriesWraper,
  HeaderTitle,
  Subtitle,
} from "./HeaderOfIndustriesStyles";
import { useEffect, useState } from "react";

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
    <>
      <HeaderOfIndustriesWraper>
        <ReactFluidAnimation
          style={{
            innerWidth: "100%",
            innerHeight: "100vh",
          }}
          config={defaultConfig}
        />
        {/* <canvas width="100%" height="100vh"> */}
        <ContentOfHeader>
          <BaseLinks>
            <Link to={"/"}>Home / </Link>
            <Link to={"/"}>Industries / </Link>
            <Link to={"/"}>{data.back}</Link>
          </BaseLinks>
          <HeaderTitle>{data.title}</HeaderTitle>
          <Subtitle>{data.subTitle}</Subtitle>
        </ContentOfHeader>
        {/* </canvas> */}
      </HeaderOfIndustriesWraper>
    </>
  );
};

export default HeaderOfIndustries;
