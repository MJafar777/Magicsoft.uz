import { FC, useState } from "react";

import {
  Form,
  Title,
  Input,
  Button,
  ImgEye,
  EyeFlex,
  LoginWrapper,
  InputPassword,
} from "./login";

import { eye_closed, eye_looked } from "../../../assets";
import { HeaderLogo } from "../../../layouts/header/components";
import { NavLink } from "react-router-dom";

const Login: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
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
    setFormData({ username: "", password: "" });
  };

  return (
    <LoginWrapper>
      <HeaderLogo />

      <Title>Log In to your Account</Title>
      <Form onSubmit={handleSubmit}>
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
            minLength={6}
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
        <Button type="submit">LOG IN</Button>
      </Form>
      <NavLink
        style={{
          listStyle: "none",
          fontSize: "14px",
          color: "#f0f0f0",
          textDecoration: "underline",
        }}
        to="/"
      >
        Forgot Password?
      </NavLink>
    </LoginWrapper>
  );
};

export default Login;
