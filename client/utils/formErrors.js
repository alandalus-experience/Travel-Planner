export const onError = (errors) => {

  if (errors.Email) {
    if(errors.Email?.type === "required") {
      errors.Email.message = 'Email field cannot be empty';
      return
    } else if(errors.Email?.type === "pattern") {
      errors.Email.message = 'Please, enter a vaild email';
      return
    }
  }
  
  if (errors.Password) {
    if (errors.Password?.type === "required") {
      errors.Password.message = "Password can\'t be empty";
      return
    } else if (errors.Password?.type === "minLength") {
      errors.Password.message = "Password is too short";
      return
    }  else if (errors.Password?.type === "maxLength") {
      errors.Password.message = "Password is too long";
      return
    }
  }
  
  if (errors.Password2?.type === "validate") {
    errors.Password2.message = "Passwords don't match";
    return
  }
  return errors
}