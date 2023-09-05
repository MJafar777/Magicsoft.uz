import { PlatformProductsWrapper } from "./platformProducts";
import { PlatformNavbar } from "../../../components/platformProducts/navbar";
import { AllProjects } from "../../../components/platformProducts/allProjects";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";
import { dataCards } from "../../../api/data/pluginProjects";

const PlatformProducts = () => {
  return (
    <PlatformProductsWrapper>
      <PlatformNavbar />

      <AllProjects />

      <CardsProject dataCards={dataCards} width={600} bg={""} />
    </PlatformProductsWrapper>
  );
};

export default PlatformProducts;
