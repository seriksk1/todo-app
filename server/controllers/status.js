const strToDate = (str) => {
  return new Date(str.split('-'));
};

// Функция возвращает true/false в зависимости от того, просрочена ли дата
const isOverdue = (obj) => {
  return strToDate(obj.dueDate) < new Date();
};

// Функция возвращает статус в зависимости от того, просрочена ли дата
const getOverdueStatus = (obj) => {
  return isOverdue(obj) ? 'overdue' : 'pending';
};

// Функция берёт текущий статус и возвращает его противополжный, при этом проверяя на просроченность
const getUpdatedStatus = (obj) => {
  return obj.status === 'done' ? getOverdueStatus(obj) : 'done';
};

// Функция проверяет  дату объекта, со статусом pending, на просроченность и устанавливает статус 'overdue' в случае просрочки
const onOverdueChange = (obj) => {
  if (obj.status === 'pending' && isOverdue(obj)) {
    obj.status = 'overdue';
  }
};

const checkAllOnOverdue = (data) => {
  data.forEach((item) => onOverdueChange(item));
};

module.exports = {
  getOverdueStatus,
  getUpdatedStatus,
  onOverdueChange,
  checkAllOnOverdue,
};
