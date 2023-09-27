import { FC, Suspense, useEffect, useState } from "react";

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
} from "./login";

import { NavLink } from "react-router-dom";
import { Loader } from "../../../components/Loading";
// import { Error } from "../../../components/Error";
import { Success } from "../../../components/success";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { eye_closed, eye_looked } from "../../../assets";
import { HeaderLogo } from "../../../layouts/header/components";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { gapi } from "gapi-script";
// import LoginGoogle from "../components/google/login/LoginGoogle";
// import LogoutGoogle from "../components/google/logout/LogoutGoogle";

const Login: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [buttonSubmitClicked, setButtonSubmitClicked] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
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

    setFormData({ username: "", password: "" });
  };

  // Oauth Google Account

  const clientId =
    "936147651738-s4hi0rdseiema0k63lveg7sv3mk9igrt.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

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

          <Title>Log In to your Account</Title>

          <Form onSubmit={handleSubmit} autoComplete="off">
            <Input
              required
              type="email"
              id="username"
              maxLength={30}
              name="username"
              placeholder="Email"
              value={formData.username}
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
              {/* google Oauth2 ⬇️ */}
              {/* <LoginGoogle children={undefined} /> */}

              <AiFillGoogleCircle
                style={{
                  cursor: "pointer",
                }}
              />

              <BiLogoFacebookCircle style={{ cursor: "pointer" }} />

              <AiFillGithub style={{ cursor: "pointer" }} />
            </FlexAuth>

            <Button type="submit">LOG IN</Button>
            <NavLink
              style={{
                width: "100%",
                listStyle: "none",
                fontSize: "16px",
                color: "#f0f0f0",
              }}
              to="/sign-up"
            >
              <Button style={{ width: "100%" }}>SIGN UP</Button>
            </NavLink>
          </Form>
          {/* <Button onClick={() => <LogoutGoogle children={undefined} />}>
            LOG OUT
          </Button> */}

          <NavLink
            style={{
              listStyle: "none",
              fontSize: "14px",
              color: "#f0f0f0",
              textDecoration: "underline",
            }}
            to="/forgot-password"
          >
            Forgot Password?
          </NavLink>
          {/* logout google Oauth */}
          {/* <LogoutGoogle children={undefined} /> */}
        </LoginWrapper>
      )}
    </Suspense>
  );
};

export default Login;
