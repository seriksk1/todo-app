import React from "react";
import { Redirect } from "react-router-dom";
import { authSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

function withAuth(Component) {
  const HOC = () => {
    const { authorized } = useSelector(authSelector);

    return (
      <>
        {authorized ? <Redirect to="/tasks" /> : null}
        <Component />
      </>
    );
  };

  return HOC;
}

export default withAuth;
