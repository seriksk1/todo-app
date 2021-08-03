export const strToDate = (str) => {
  return new Date(str.split("-"));
};

const byField = (field) => {
  switch (field) {
    case "Due-date": {
      return (a, b) => (strToDate(a.dueDate) > strToDate(b.dueDate) ? 1 : -1);
    }

    case "Status": {
      return (a, b) => (a.status > b.status ? 1 : -1);
    }

    default:
      console.log("Undefined status");
      break;
  }
};

export const getSortedTasks = (data, sortType) => {
  data.sort(byField(sortType));
  return data;
};

export const setOverDueStatus = (data) => {
  data.forEach((item) => {
    if (item.status === "pending") {
      if (strToDate(item.dueDate) > new Date()) {
        item.status = "overdue";
      }
    }
  });
};
