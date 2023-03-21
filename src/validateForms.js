export default function validateForms(values) {
  let errors = {};

  //   Reg

  const validName = new RegExp(
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  );
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
    errors.loginPass = "inValid Password";
  }

  // OTP
  if (!values.otp) {
    errors.otp = "Fill";
  }

  //Edit profile
  if (!validName.test(values.editName)) {
    errors.editName = "inValid Name";
  }

  if (!validPassword.test(values.editPass)) {
    errors.editPass = "Password must be minimum eight characters";
  }

  if (!validGmail.test(values.editGmail)) {
    errors.editGmail = "inCorrect Gmail";
  }

  if (!validPhone.test(values.editPhone)) {
    errors.editPhone = "inCorrect PhoneNumber";
  }

  //Get in touch
  if (!validName.test(values.contactName)) {
    errors.contactName = "inValid Name";
  }

  if (!validGmail.test(values.contactGmail)) {
    errors.contactGmail = "inCorrect Gmail";
  }

  if (!values.contactMessage) {
    errors.contactMessage = "Enter Any Message";
  }

  return errors;
}
