import React from "react";
import { ToastContainer } from "react-toastify";

function withToast(Component) {
  class HOC extends React.Component {
    render() {
      return <Component />;
    }
  }
}

export default withToast;
