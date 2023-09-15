import React from "react";

import { FC, Suspense, useState } from "react";

import { Form, Input, Button, LoginWrapper } from "./forgotPass";

import { HeaderLogo } from "../../../../../layouts/header/components";

const ForgotPass: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ username: "", email: "" });
  };

  return (
    <Suspense fallback={""}>
      <LoginWrapper>
        <HeaderLogo />

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
          <Input
            required
            id="email"
            type="email"
            name="email"
            maxLength={30}
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <Button type="submit">Sign In</Button>
        </Form>
      </LoginWrapper>
    </Suspense>
  );
};

export default ForgotPass;
