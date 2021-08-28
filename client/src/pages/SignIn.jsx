import React from "react";
import { useDispatch } from "react-redux";

import { FormContainer, SignInForm } from "../components";
import { login } from "../redux/actions/auth";

import withAuth from "../hocs/withAuth";

function SignIn() {
  const dispatch = useDispatch();

  const onLogin = (data) => {
    dispatch(login(data));
  };

  return <FormContainer onSubmitAction={onLogin} FormView={SignInForm} />;
}

export default withAuth(SignIn);
