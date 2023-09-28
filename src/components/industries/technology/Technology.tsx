import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ContainerInovationSkils,
  InovationInfo,
  InovationSkil,
  TechnologyWrapper,
  TitleInovation,
} from "./TechnologyStyles";

import useLocales from "../../../locales/useLocales";
import { Arrow } from "../../../assets/industries";

const Technology = () => {
  const loaction = useLocation();

  const { translate } = useLocales();

  const [whichIndustry, setWhichIndustry] = useState("OfTravel");
  useEffect(() => {
    if (loaction.pathname == "/fintech") {
      setWhichIndustry("OfFintech");
    } else if (loaction.pathname == "/travels") {
      setWhichIndustry("OfTravel");
    } else {
      setWhichIndustry("OfRetail");
    }
  }, [loaction.pathname]);

  return (
    <TechnologyWrapper>
      <TitleInovation>{translate(`skilTitle${whichIndustry}`)}</TitleInovation>
      <ContainerInovationSkils>
        <InovationSkil>
          <div className="topContent">
            <span></span>
            <p>{translate(`skilOneTitle${whichIndustry}`)}</p>
            <img src={Arrow} alt="" />
          </div>
          <InovationInfo>
            {translate(`skilOneSubtitle${whichIndustry}`)}
          </InovationInfo>
        </InovationSkil>

        <InovationSkil>
          <div className="topContent">
            <span></span>
            <p>{translate(`skilTwoTitle${whichIndustry}`)}</p>
            <img src={Arrow} alt="" />
          </div>
          <InovationInfo>
            {translate(`skilTwoSubtitle${whichIndustry}`)}
          </InovationInfo>
        </InovationSkil>

        <InovationSkil>
          <div className="topContent">
            <span></span>
            <p>{translate(`skilThreeTitle${whichIndustry}`)}</p>
            <img src={Arrow} alt="" />
          </div>
          <InovationInfo>
            {translate(`skilThreeSubtitle${whichIndustry}`)}
          </InovationInfo>
        </InovationSkil>

        <InovationSkil>
          <div className="topContent">
            <span></span>
            <p>{translate(`skilFourTitle${whichIndustry}`)}</p>
            <img src={Arrow} alt="" />
          </div>
          <InovationInfo>
            {translate(`skilFourSubtile${whichIndustry}`)}
          </InovationInfo>
        </InovationSkil>

        <InovationSkil>
          <div className="topContent">
            <span></span>
            <p>{translate(`skilOneTitle${whichIndustry}`)}</p>
            <img src={Arrow} alt="" />
          </div>
          <InovationInfo>
            {translate(`skilOneSubtitle${whichIndustry}`)}
          </InovationInfo>
        </InovationSkil>
      </ContainerInovationSkils>
    </TechnologyWrapper>
  );
};

export default Technology;
