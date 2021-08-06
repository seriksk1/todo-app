const { TASK_STATUS } = require("../constants");

const strToDate = (str) => {
  return new Date(str.split("-"));
};

const isOverdue = (obj) => {
  return strToDate(obj.dueDate) < new Date();
};

const getUpdatedStatus = (obj) => {
  if (obj.status === TASK_STATUS.PENDING && isOverdue(obj)) {
    return TASK_STATUS.OVERDUE;
  } else {
    return obj.status;
  }
};

const getCheckedItems = (data) => {
  return data.map((obj) => {
    obj.status = getUpdatedStatus(obj);
    return obj;
  });
};

module.exports = {
  getUpdatedStatus,
  getCheckedItems,
};
