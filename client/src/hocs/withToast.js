import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cleanNotification } from "../redux/actions/notifications";
import { notificationSelector } from "../redux/selectors";

function withToast(Component) {
  const HOC = () => {
    const dispatch = useDispatch();
    const { isActive, notification } = useSelector(notificationSelector);

    const handleCleanNotifications = () => {
      dispatch(cleanNotification());
    };

    isActive &&
      toast(notification.message, {
        type: notification.type,
        onClose: handleCleanNotifications,
      });

    return <Component />;
  };

  return HOC;
}

export default withToast;
