const strToDate = (str) => {
  return new Date(str.split("-"));
};

const isOverdue = (obj) => {
  return strToDate(obj.dueDate) < new Date();
};

const getOverdueStatus = (obj) => {
  return isOverdue(obj) ? "overdue" : "pending";
};

const getUpdatedStatus = (obj) => {
  return obj.status === "done" ? getOverdueStatus(obj) : "done";
};

const onOverdueChange = (obj) => {
  if (obj.status === "pending" && isOverdue(obj)) {
    obj.status = "overdue";
  }
};

const checkAllOnOverdue = (data) => {
  data.forEach((item) => onOverdueChange(item));
};

module.exports = {
  getUpdatedStatus,
  onOverdueChange,
  checkAllOnOverdue,
};
