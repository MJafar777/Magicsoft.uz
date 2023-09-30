import ButtonEscort from "../../../../components/buttons/buttonEscort/ButtonEscort";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  ServicesLeft,
  ServicesRight,
  ServicesWrapper,
  ServicesLeftItem,
  ServicesLeftTitle,
  ServicesLeftItemBtn,
  ServicesLeftItemTitle,
  ServicesRightImageBox,
  ServicesLeftItemNumber,
  ServicesContainerWrapper,
  ServicesLeftItemDescription,
} from "./ServicesStyles";

import gif from "../../../../assets/gif.gif";

import ButtonMagnet from "../../../../components/buttons/magnetikButton/ButtonMagnetik";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import useLocales from "../../../../locales/useLocales";

import { useNavigate } from "react-router-dom";


const Services = () => {
  const wWidth = useWindowWidth();
  const { translate } = useLocales();

  const navigate = useNavigate();


  return (
    <ServicesContainerWrapper>
      <ServicesWrapper>
        <ServicesLeft>
          <div className="servicesLeft-title-row">
            <ServicesLeftTitle>{translate("ourService")}</ServicesLeftTitle>
            <PageSectionNumber fullPageNumber={12} currentPageNumber={"04"} />
          </div>
          <ServicesLeftItem>
            <ServicesLeftItemNumber>
              <p>1</p>
            </ServicesLeftItemNumber>
            <div>
              <ServicesLeftItemTitle>
                {translate("productEngineering")}
              </ServicesLeftItemTitle>
              <ServicesLeftItemDescription>
                {translate("productEngineeringDesc")}
              </ServicesLeftItemDescription>
            </div>
          </ServicesLeftItem>

          <ServicesLeftItem>
            <ServicesLeftItemNumber className="yellovNumber">
              <p>2</p>
            </ServicesLeftItemNumber>
            <div>
              <ServicesLeftItemTitle>
                {translate("dataEngineeringAI")}
              </ServicesLeftItemTitle>
              <ServicesLeftItemDescription>
                {translate("dataEngineeringAIDesc")}
              </ServicesLeftItemDescription>
            </div>
          </ServicesLeftItem>

          <ServicesLeftItem>
            <ServicesLeftItemNumber>
              <p>3</p>
            </ServicesLeftItemNumber>
            <div>
              <ServicesLeftItemTitle>
                {translate("cloudEngineering")}
              </ServicesLeftItemTitle>
              <ServicesLeftItemDescription>
                {translate("cloudEngineeringDesc")}
              </ServicesLeftItemDescription>
            </div>
          </ServicesLeftItem>

          {wWidth < 1200 ? (
            <ServicesLeftItem>
              <ServicesLeftItemNumber className="yellovNumber">
                <p>4</p>
              </ServicesLeftItemNumber>
              <div>
                <ServicesLeftItemTitle>
                  {translate("nextGenServices")}
                </ServicesLeftItemTitle>
                <ServicesLeftItemDescription>
                  {translate("nextGenServicesDesc")}
                </ServicesLeftItemDescription>
              </div>
            </ServicesLeftItem>
          ) : (
            ""
          )}

          <ServicesLeftItemBtn onClick={() => navigate("/retail")}>
            <ButtonMagnet>
              <ButtonEscort
                text1={translate("viewAllServices")}
                text2={translate("viewAllServices")}
                arrowOutwardIcon={true}
              />
            </ButtonMagnet>
          </ServicesLeftItemBtn>
        </ServicesLeft>
        <ServicesRight>
          <ServicesRightImageBox>
            <img className="gif" src={gif} />
          </ServicesRightImageBox>
        </ServicesRight>
      </ServicesWrapper>
    </ServicesContainerWrapper>
  );
};

export default Services;
