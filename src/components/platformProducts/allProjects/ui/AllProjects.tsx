import React from "react";
import { AllProjectsWrapper, SubTitle } from "./allProjects";
import { FilterAllProjects } from "../components/filters";

interface Props {}

const dataFilter = [
  { id: 1, value: "All" },
  { id: 2, value: "Startup" },
  { id: 3, value: "Enterprise" },
  { id: 4, value: "Ecommerce" },
  { id: 5, value: "SaaS" },
  { id: 6, value: "Social Media" },
];

const AllProjects: React.FC<Props> = () => {
  return (
    <AllProjectsWrapper>
      <SubTitle>All Projects</SubTitle>
      <FilterAllProjects dataFilter={dataFilter} />
    </AllProjectsWrapper>
  );
};

export default AllProjects;
