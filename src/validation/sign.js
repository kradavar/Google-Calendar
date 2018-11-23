const validatePassword = (passwordFirst, passwordSecond) =>
  passwordFirst === passwordSecond ? undefined : "Your passwords are different";
export const validate = values => {
  return {
    correctPassword: validatePassword(values.password, values.correctPassword)
  };
};
