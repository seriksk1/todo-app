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
      isValid = value.length >= 3 ? true : false;
      console.log("checking task", isValid);
      return isValid;

    case "dueDate":
      isValid = value.length > 0 ? true : false;
      console.log("checking dueDate", isValid);
      return isValid;

    default:
      console.log("Undefined id");
      return false;
  }
};