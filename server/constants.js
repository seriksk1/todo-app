const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
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
