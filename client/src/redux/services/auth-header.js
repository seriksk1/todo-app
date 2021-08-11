export const authHeader = () => {
  const token = localStorage.getItem("token");

  return Boolean(token) ? { "x-access-token": token } : {};
};
