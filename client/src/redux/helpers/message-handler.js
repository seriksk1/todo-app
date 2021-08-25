export const isUser = (type) => {
  return type !== "info";
};

export const isOtherUser = (user, type) => {
  return user !== localStorage.getItem("username") && isUser(type);
};

export const isCurrentUser = (user, type) => {
  return user === localStorage.getItem("username") && isUser(type);
};

export const isEdited = (message) => {
  const { createdAt, updatedAt } = message;
  return createdAt !== updatedAt ? "Edited by" : null;
};
