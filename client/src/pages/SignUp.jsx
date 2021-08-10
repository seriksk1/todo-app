import React from "react";

import { FormContainer } from "../components";

const formText = "Signup Form";
const btnText = "Signup";

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

function SignUp() {
  return (
    <FormContainer btnText={btnText} formText={formText} fields={formFields} />
  );
}

export default SignUp;
