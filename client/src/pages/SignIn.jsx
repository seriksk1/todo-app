import React from "react";

import { FormContainer } from "../components";

const btnText = "Login";
const formText = "Login Form";

const formFields = [
  {
    type: "email",
    label: "Email",
    variant: "outlined",
    helperText: "...",
    required: true,
  },
  {
    type: "password",
    label: "Password",
    variant: "outlined",
    helperText: "...",
    required: true,
  },
];

function SignIn() {
  return (
    <FormContainer
      btnText={btnText}
      formText={formText}
      fields={formFields}
      onSubmit={""}
    />
  );
}

export default SignIn;
