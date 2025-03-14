export const checkValidData = (email, password,name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
// const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name);
  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password ID is not Valid";
//   if(!isNameValid) return "Enter a valid Name";
  return null;
};
