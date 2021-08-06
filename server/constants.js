const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const TASK_STATUS = {
  PENDING: "pending",
  DONE: "done",
  OVERDUE: "overdue",
};

module.exports = {
  HTTP_STATUS,
  TASK_STATUS,
};
