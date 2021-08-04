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
      console.log("Undefined status");
      break;
  }
};

export const getSortedTasks = (data, sortType) => {
  data.sort(byType(sortType));
  return data;
};

export const setOverdueStatus = (obj) => {
  if (obj.status === "pending") {
    if (strToDate(obj.dueDate) < new Date()) {
      obj.status = "overdue";
    }
  }
};

export const checkOverdueDate = (data) => {
  data.forEach((item) => setOverdueStatus(item));
};
