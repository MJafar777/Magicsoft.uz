import { FeedbackCardWrapper, User } from "./FeedbackStyles";
import { star } from "../../../../assets/about";

const FeedbackCard = () => {
  return (
    <FeedbackCardWrapper>
      <p style={{ color: "white" }}>
        {" "}
        “ Top Arbeit. Sehr schnell & professionell. Denkt mit und berät
        gle-ichzeitig noch bzw. gibt Verbesserung-stipps. Oben drauf kommt ein
        sehr fairer Preis. “
      </p>

      <User>
        <p>Harry Poter, Hogwards </p>
        <div style={{ display: "flex" }}>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </User>
    </FeedbackCardWrapper>
  );
};

export default FeedbackCard;
