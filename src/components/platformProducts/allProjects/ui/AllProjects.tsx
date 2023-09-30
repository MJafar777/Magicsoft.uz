import React from "react";
import { AllProjectsWrapper, SubTitle } from "./allProjects";
import { FilterAllProjects } from "../components/filters";
import useLocales from "../../../../locales/useLocales";

interface Props {}

const AllProjects: React.FC<Props> = () => {
  const { translate } = useLocales();

  const dataFilter = [
    { id: 1, value: translate("all"), type: "All" },
    { id: 2, value: translate("startup"), type: "Startup" },
    { id: 3, value: translate("enterprice"), type: "Enterprice" },
    { id: 4, value: translate("ecommerceTitle"), type: "Ecommerce" },
    { id: 5, value: translate("SaaS"), type: "SaaS" },
    { id: 6, value: translate("socialMedia"), type: "Social Media" },
  ];

  return (
    <AllProjectsWrapper>
      <SubTitle>{translate("allProjects")}</SubTitle>
      <FilterAllProjects dataFilter={dataFilter} />
    </AllProjectsWrapper>
  );
};

export default AllProjects;
