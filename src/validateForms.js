export default function validateForms(values) {
  let errors = {};

  //   Reg
  if (!values.name) {
    errors.name = "name is required";
  }

  if (!values.phone) {
    errors.phone = "phone number is required";
  }

  if (!values.gmail) {
    errors.gmail = "gmail is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  }

  //   Login
  if (!values.loginGmail) {
    errors.loginGmail = "gmail is requireed";
  }

  if (!values.loginPass) {
    errors.loginPass = "password is requireed";
  }

  return errors;
}
