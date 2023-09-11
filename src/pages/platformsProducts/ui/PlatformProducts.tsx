import { PlatformProductsWrapper } from "./platformProducts";
import { PlatformNavbar } from "../../../components/platformProducts/navbar";
import { AllProjects } from "../../../components/platformProducts/allProjects";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";
import { dataCards } from "../../../api/data/pluginProjects";
import { Suspense } from "react";
import { Loader } from "../../../components/Loading";

const PlatformProducts = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PlatformProductsWrapper>
        <PlatformNavbar />

        <AllProjects />

        <CardsProject dataCards={dataCards} width={600} bg={""} />
      </PlatformProductsWrapper>
    </Suspense>
  );
};

export default PlatformProducts;
