import React from "react";
import { useDispatch } from "react-redux";

import { FormContainer } from "../components";
import { login } from "../redux/actions/auth";

import withAuth from "../hocs/withAuth";

const btnText = "Login";
const formText = "Login Form";
const authHelperText = "Haven't account yet?";
const authHelperPath = "/signup";

const formFields = [
  {
    id: "email",
    type: "email",
    label: "Email",
    variant: "outlined",
    helperText: null,
    required: true,
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    variant: "outlined",
    helperText: "At least 6 characters and 1 upper case letter",
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
      fields={formFields}
      formText={formText}
      userAction={onLogin}
      authHelperText={authHelperText}
      authHelperPath={authHelperPath}
    />
  );
}

export default withAuth(SignIn);
