export const getFormValidation = (obj) => {
  let isValid = Object.keys(obj).every((key) => isInputValid(obj, key));
  return isValid;
};

export const isInputValid = (obj, key) => {
  const value = obj[key];
  let isValid = null;

  switch (key) {
    case "email":
      isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      return isValid;

    case "password":
      isValid = value.length >= 6 && value.toLowerCase() !== value;
      return isValid;

    case "task":
    case "name":
    case "username":
      isValid = value.length >= 3 ? true : false;
      return isValid;

    case "capacity":
      isValid = Number(value);
      return isValid;

    case "dueDate":
      isValid = value.length > 0 ? true : false;
      return isValid;

    default:
      console.log("Undefined id");
      return false;
  }
};
