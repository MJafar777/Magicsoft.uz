import React from "react";
import {
  ContactWrapper,
  Content,
  ContentSide,
  FormSide,
  Privacy,
  Title,
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContentSide>
        <Title>CONTACT US</Title>
        <div className="border"></div>
        <Content>
          We have convinced you? Very cool! Then just write to us and we'll get
          back to you as soon as possible to arrange a video call. There you can
          pitch your idea and we will answer all your questions. We are happy to
          welcome you at MAGICSOFT Studios!
        </Content>
      </ContentSide>
      <FormSide>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email address" />
        <input type="tel" placeholder="Your phone number (optional)" />
        <textarea placeholder="Your message..." name="" id="" />
        <button>Submit</button>
        <Privacy>
          By sending this request you agree to our privacy policy.{" "}
          <span>Privacy policy </span>
          agree to our privacy policy.
        </Privacy>
      </FormSide>
    </ContactWrapper>
  );
};

export default Contact;
