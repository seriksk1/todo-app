export const strToDate = (str) => {
  return new Date(str.split("-"));
};

const byType = (type) => {
  switch (type) {
    case "Due-date":
      return (a, b) => (strToDate(a.dueDate) > strToDate(b.dueDate) ? -1 : 1);

    case "Status":
      return (a, b) => (a.status > b.status ? -1 : 1);

    default:
      console.log("Undefined sortType");
      break;
  }
};

export const getSortedTasks = (data, sortType) => {
  data.sort(byType(sortType));
  return data;
};

export const getUpdatedStatus = (obj) => {
  return obj.status === "done" ? getNotFinishedStatus(obj) : "done";
};

const isOverdue = (obj) => {
  return strToDate(obj.dueDate) < new Date();
};

const getNotFinishedStatus = (obj) => {
  return isOverdue(obj) ? "overdue" : "pending";
};
