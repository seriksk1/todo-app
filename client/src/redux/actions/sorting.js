import { TASK_STATUS, SORT_BY } from "../constants";

export const strToDate = (str) => {
  return new Date(str.split("-"));
};

const byType = (type) => {
  switch (type) {
    case SORT_BY.DUEDATE:
      return (a, b) => (strToDate(a.dueDate) > strToDate(b.dueDate) ? 1 : -1);

    case SORT_BY.STATUS:
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
  return obj.status === TASK_STATUS.DONE
    ? getUndoneStatus(obj)
    : TASK_STATUS.DONE;
};

const isOverdue = (obj) => {
  return strToDate(obj.dueDate) < new Date();
};

const getUndoneStatus = (obj) => {
  return isOverdue(obj) ? TASK_STATUS.OVERDUE : TASK_STATUS.PENDING;
};
