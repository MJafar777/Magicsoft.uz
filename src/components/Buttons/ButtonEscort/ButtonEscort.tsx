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
} from "../buttonInfo/ButtonInfoStyles";

interface ButtonEscortProps {
  text1: string;
  text2: string;
  arrowOutwardIcon: boolean;
}

function ButtonEscort({ text1, text2, arrowOutwardIcon }: ButtonEscortProps) {
  return (
    <ButtonEscortWrapper>
      <ButtonEscortBtn>
        <ButtonChangeBox>
          <ButtonPimaryText className="primary">
            <ButtonEscortText>{text1}</ButtonEscortText>
          </ButtonPimaryText>

          <ButtonSecondaryText className="secondary">
            <ButtonEscortText>{text2}</ButtonEscortText>
          </ButtonSecondaryText>
        </ButtonChangeBox>
      </ButtonEscortBtn>

      {arrowOutwardIcon ? (
        <ButtonEscortSircle>
          <ArrowOutwardIcon />
        </ButtonEscortSircle>
      ) : (
        ""
      )}
    </ButtonEscortWrapper>
  );
}

export default ButtonEscort;
