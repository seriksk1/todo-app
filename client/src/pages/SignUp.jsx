import React from "react";
import { useDispatch } from "react-redux";

import { FormContainer } from "../components";
import { register } from "../redux/actions/auth";

const formText = "Signup Form";
const btnText = "Signup";

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

function SignUp() {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data));
  };

  return (
    <FormContainer
      userAction={onRegister}
      btnText={btnText}
      formText={formText}
      fields={formFields}
    />
  );
}

export default SignUp;
