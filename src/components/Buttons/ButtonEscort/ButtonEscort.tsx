import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  ButtonEscortBtn,
  ButtonEscortSircle,
  ButtonEscortText,
  ButtonEscortWrapper,
} from "./ButtonEscortStyles";
import {
  ButtonChangeBox,
  ButtonPimaryText,
  ButtonSecondaryText,
} from "../ButtonInfo/ButtonInfoStyles";

const ButtonEscort = () => {
  return (
    <ButtonEscortWrapper>
      <ButtonEscortBtn>
        <ButtonChangeBox>
          <ButtonPimaryText className="primary">
            <ButtonEscortText>Hire Top Engineers</ButtonEscortText>
          </ButtonPimaryText>

          <ButtonSecondaryText className="secondary">
            <ButtonEscortText>Hire Top Engineers</ButtonEscortText>
          </ButtonSecondaryText>
        </ButtonChangeBox>
      </ButtonEscortBtn>
      <ButtonEscortSircle>
        <ArrowOutwardIcon />
      </ButtonEscortSircle>
    </ButtonEscortWrapper>
  );
};

export default ButtonEscort;
