export const onError = (errors) => {

  if (errors.Email) {
    if(errors.Email?.type === "required") {
      errors.Email.message = 'Email field cannot be empty';
    } else if(errors.Email?.type === "pattern") {
      errors.Email.message = 'Email should look like this: myemail@example.com'
    }
  }
  
  if (errors.Password) {
    if (errors.Password?.type === "required") {
      errors.Password.message = "Password can\'t be empty"
    } else if (errors.Password?.type === "minLength") {
      errors.Password.message = "Password must be more than 8 characters"
    }  else if (errors.Password?.type === "maxLength") {
      errors.Password.message = "Password must be less than 256 characters"
    }
  }
  
  if (errors.Password2?.type === "validate") {
    errors.Password2.message = "Passwords don't match"
  }
  
  return errors
}