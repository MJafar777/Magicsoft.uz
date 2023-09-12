import useLocales from "../../../locales/useLocales";
import { BanerWrapper, ContentOfBaner } from "./BanerStyles";

const Baner = () => {
  const { translate } = useLocales();

  return (
    <BanerWrapper>
      <ContentOfBaner>
        <h3>{translate("bannerTitle")} </h3>
        <p>{translate("bannerSubtitle")}</p>
      </ContentOfBaner>
    </BanerWrapper>
  );
};

export default Baner;
