import React from "react";

import { useDispatch } from "react-redux";

import { FormContainer } from "../components";
import { register } from "../redux/actions/auth";

import withAuth from "../hocs/withAuth";

const formText = "Signup Form";
const btnText = "Signup";
const authHelperText = "Have account already?";
const authHelperPath = "/signin";

const formFields = [
  {
    id: "username",
    type: "text",
    label: "Username",
    variant: "outlined",
    helperText: null,
    required: true,
  },
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

function SignUp() {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data));
  };

  return (
    <FormContainer
      btnText={btnText}
      formText={formText}
      fields={formFields}
      onSubmitAction={onRegister}
      authHelperText={authHelperText}
      authHelperPath={authHelperPath}
    />
  );
}

export default withAuth(SignUp);
