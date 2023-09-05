import { FC } from "react";
import { BoxImgLastWrapper, ImgFirst, ImageSecond } from "./boxImgLast";
import { firstImageFooter, secondImageFooter } from "../../../../assets";
const BoxImgLast: FC = () => {
  return (
    <BoxImgLastWrapper>
      <ImgFirst
        src={firstImageFooter}
        alt={`this image not found ${firstImageFooter}`}
      />

      <ImageSecond
        src={secondImageFooter}
        alt={`this image not found ${secondImageFooter}`}
      />
    </BoxImgLastWrapper>
  );
};

export default BoxImgLast;
