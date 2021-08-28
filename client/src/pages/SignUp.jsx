import React from "react";
import { useDispatch } from "react-redux";

import { FormContainer, SignUpForm } from "../components";
import { register } from "../redux/actions/auth";
import withAuth from "../hocs/withAuth";

function SignUp() {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data));
  };

  return <FormContainer onSubmitAction={onRegister} FormView={SignUpForm} />;
}

export default withAuth(SignUp);
