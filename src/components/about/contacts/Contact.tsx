import useLocales from "../../../locales/useLocales";
import {
  ContactWrapper,
  Content,
  ContentSide,
  FormSide,
  Privacy,
  Title,
} from "./ContactStyles";

const Contact = () => {
  const { translate } = useLocales();

  return (
    <ContactWrapper id="#contact">
      <div className="bg">
        <ContentSide>
          <Title>{translate("contactTitle")}</Title>
          <div className="border"></div>
          <Content>{translate("contactSubtitle")}</Content>
        </ContentSide>
        <FormSide>
          <input type="text" placeholder={translate("inputName")} />
          <input type="email" placeholder={translate("inputEmail")} />
          <input type="tel" placeholder={translate("inputPhone")} />
          <textarea placeholder={translate("teaxtareaMessage")} name="" id="" />
          <button className="btn">{translate("Submit")}</button>
          <Privacy>
            {translate("contactFormSubtitle")}
            <span>{translate("privancy")} </span>
            {translate("contactFormSubtitleCon")}
          </Privacy>
        </FormSide>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
