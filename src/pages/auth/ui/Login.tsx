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
} from "./login";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { eye_closed, eye_looked } from "../../../assets";
import { HeaderLogo } from "../../../layouts/header/components";
import { NavLink } from "react-router-dom";
import { Loader } from "../../../components/Loading";
import { Success } from "../../../components/success";
// import { Error } from "../../../components/Error";

const Login: FC = () => {
  const keys = {
    web: {
      client_id:
        "314979823268-u226atnls184jnh1ioje57um1iikk2ta.apps.googleusercontent.com",
      project_id: "twitch-354311",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_secret: "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",
      redirect_uris: ["https://magicsoft.uz"],
      javascript_origins: ["https://magicsoft.uz"],
    },
  };

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

  const handleLoginSuccess = (response) => {
    // Foydalanuvchi tizimga muvaffaqiyatli kirgandi
    console.log(response);
  };

  const handleLoginFailure = (error) => {
    // Kirishda xatolik yuz berdi
    console.error(error);
  };

  <GoogleLogin
    onSuccess={(credentialResponse) => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  />;

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
              type="text"
              id="username"
              maxLength={20}
              name="username"
              placeholder="Name"
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
              <GoogleOAuthProvider
                clientId={`${keys.web.client_secret}`}
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
              >
                <AiFillGoogleCircle style={{ cursor: "pointer" }} />
              </GoogleOAuthProvider>

              <BiLogoFacebookCircle style={{ cursor: "pointer" }} />
              <AiFillGithub style={{ cursor: "pointer" }} />
            </FlexAuth>

            <Button type="submit">LOG IN</Button>
          </Form>
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
        </LoginWrapper>
      )}
    </Suspense>
  );
};

export default Login;
