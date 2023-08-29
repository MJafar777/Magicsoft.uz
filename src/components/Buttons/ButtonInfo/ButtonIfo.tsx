import {
  ButtonChangeBox,
  ButtonInfoBtn,
  ButtonInfoText,
  ButtonPimaryText,
  ButtonSecondaryText,
} from "./ButtonInfoStyles";

const ButtonIfo = () => {
  return (
    <ButtonInfoBtn>
      <ButtonChangeBox>
        <ButtonPimaryText className="primary">
          <ButtonInfoText>Why MagicSoft?</ButtonInfoText>
        </ButtonPimaryText>

        <ButtonSecondaryText className="secondary">
          <ButtonInfoText>Why MagicSoft?</ButtonInfoText>
        </ButtonSecondaryText>
      </ButtonChangeBox>
    </ButtonInfoBtn>
  );
};

export default ButtonIfo;
