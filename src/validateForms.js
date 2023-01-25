export default function validateForms(values) {
  let errors = {};

  //   Reg

  const validName = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/);
  if (!validName.test(values.name)) {
    errors.name = "inValid Name";
  }

  const validPhone = new RegExp(/^[6]\d{8}$/);
  if (!validPhone.test(values.phone)) {
    errors.phone = "inCorrect PhoneNumber";
  }

  const validGmail = new RegExp(/^[\w.+\-]+@gmail\.com$/);
  if (!validGmail.test(values.gmail)) {
    errors.gmail = "inCorrect Gmail";
  }

  const validPassword = new RegExp(/^.{8,30}$/);
  if (!validPassword.test(values.password)) {
    errors.password = "Password must be minimum eight characters";
  }

  //   Login
  
  if (!validGmail.test(values.loginGmail)) {
    errors.loginGmail = "inCorrect Gmail";
  }

  if (!validPassword.test(values.loginPass)) {
    errors.loginPass = "Password must be minimum eight characters";
  }

  return errors;
}
