import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelector } from "../redux/selectors";

function ProtectedRoute({ component: Component, ...props }) {
  const { authorized } = useSelector(authSelector);
  return authorized ? (
    <Route {...props} component={Component} />
  ) : (
    <Redirect to="/signin" />
  );
}

export default ProtectedRoute;
