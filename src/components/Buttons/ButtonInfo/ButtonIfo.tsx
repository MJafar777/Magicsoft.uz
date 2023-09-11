import {
  ButtonChangeBox,
  ButtonInfoBtn,
  ButtonInfoText,
  ButtonPimaryText,
  ButtonSecondaryText,
} from "./ButtonInfoStyles";

interface ButtonIfoProps {
  text1: string;
  text2: string;
}

function ButtonIfo({ text1, text2 }: ButtonIfoProps) {
  return (
    <ButtonInfoBtn>
      <ButtonChangeBox>
        <ButtonPimaryText className="primary">
          <ButtonInfoText>{text1}</ButtonInfoText>
        </ButtonPimaryText>

        <ButtonSecondaryText className="secondary">
          <ButtonInfoText>{text2}</ButtonInfoText>
        </ButtonSecondaryText>
      </ButtonChangeBox>
    </ButtonInfoBtn>
  );
}

export default ButtonIfo;
