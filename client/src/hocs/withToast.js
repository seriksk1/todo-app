import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cleanNotification } from "../redux/actions/notifications";
import { notificationSelector } from "../redux/selectors";

function withToast(Component) {
  const HOC = () => {
    const dispatch = useDispatch();
    const { isActive, message } = useSelector(notificationSelector);

    isActive &&
      toast(message, { onClose: () => dispatch(cleanNotification()) });

    return <Component />;
  };

  return HOC;
}

export default withToast;
