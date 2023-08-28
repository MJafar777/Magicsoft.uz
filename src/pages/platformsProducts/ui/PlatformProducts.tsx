import React from "react";
import { PlatformProductsWrapper } from "./platformProducts";
import { PlatformNavbar } from "../../../components/platformProducts/navbar";
import { AllProjects } from "../../../components/platformProducts/allProjects";

interface Props {}

const PlatformProducts: React.FC<Props> = () => {
  return (
    <PlatformProductsWrapper>
      <PlatformNavbar />
      <AllProjects />
    </PlatformProductsWrapper>
  );
};

export default PlatformProducts;
