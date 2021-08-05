const strToDate = (str) => {
  return new Date(str.split("-"));
};

const isOverdue = (obj) => {
  return strToDate(obj.dueDate) < new Date();
};

const getUpdatedStatus = (obj) => {
  if (obj.status === "pending" && isOverdue(obj)) {
    return "overdue";
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
