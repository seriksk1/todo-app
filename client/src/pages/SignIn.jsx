import React from "react";
import { useDispatch } from "react-redux";

import { FormContainer } from "../components";
import { login } from "../redux/actions/auth";

const btnText = "Login";
const formText = "Login Form";

const formFields = [
  {
    id: "email",
    type: "email",
    label: "Email",
    variant: "outlined",
    // helperText: "...",
    required: true,
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    variant: "outlined",
    // helperText: "...",
    required: true,
  },
];

function SignIn() {
  const dispatch = useDispatch();

  const onLogin = (data) => {
    dispatch(login(data));
  };

  return (
    <FormContainer
      btnText={btnText}
      formText={formText}
      fields={formFields}
      userAction={onLogin}
    />
  );
}

export default SignIn;
