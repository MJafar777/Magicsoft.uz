import { FC, Suspense, useState } from "react";

import {
  Form,
  Title,
  Input,
  Button,
  ImgEye,
  EyeFlex,
  FlexAuth,
  CenterBtn,
  RegisterPage,
  LoginWrapper,
  InputPassword,
} from "./signUp";

import { NavLink } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { Loader } from "../../../../components/Loading";
import { Success } from "../../../../components/success";
import { eye_closed, eye_looked } from "../../../../assets";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { HeaderLogo } from "../../../../layouts/header/components";
import React from "react";

const SignUp: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [buttonSubmitClicked, setButtonSubmitClicked] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    userlastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setButtonSubmitClicked(true);

    setFormData({ username: "", userlastname: "", email: "", password: "" });
  };

  return (
    <Suspense fallback={<Loader />}>
      {buttonSubmitClicked ? (
        <RegisterPage>
          <Success />

          <CenterBtn>
            <NavLink
              style={{
                listStyle: "none",
                fontSize: "14px",
                color: "#f0f0f0",
              }}
              to="/"
            >
              <Button type="submit">Back to Home ↩️</Button>
            </NavLink>
          </CenterBtn>
        </RegisterPage>
      ) : (
        <LoginWrapper>
          <HeaderLogo />

          <Title>Sign In To Your Account</Title>

          <Form onSubmit={handleSubmit} autoComplete="off">
            <Input
              required
              type="text"
              id="username"
              maxLength={30}
              name="username"
              placeholder="First name"
              value={formData.username}
              onChange={handleInputChange}
            />
            <Input
              required
              type="text"
              id="userlastname"
              maxLength={30}
              name="userlastname"
              placeholder="Last name"
              value={formData.userlastname}
              onChange={handleInputChange}
            />
            <Input
              required
              type="email"
              id="email"
              maxLength={30}
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <EyeFlex>
              <InputPassword
                required
                minLength={8}
                id="password"
                maxLength={20}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                type={passwordVisible ? "text" : "password"}
              />
              <ImgEye
                onClick={togglePasswordVisibility}
                src={passwordVisible ? eye_looked : eye_closed}
                alt={`this image not found ${
                  passwordVisible ? eye_looked : eye_closed
                }`}
              />
            </EyeFlex>

            <FlexAuth>
              <AiFillGoogleCircle
                style={{
                  cursor: "pointer",
                }}
              />

              <BiLogoFacebookCircle style={{ cursor: "pointer" }} />

              <AiFillGithub style={{ cursor: "pointer" }} />
            </FlexAuth>

            <Button type="submit">SIGN UP</Button>
          </Form>
        </LoginWrapper>
      )}
    </Suspense>
  );
};

export default SignUp;
