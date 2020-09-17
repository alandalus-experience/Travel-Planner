export const onError = (errors) => {
	if (errors.email) {
		if (errors.email?.type === 'required') {
			errors.email.message = 'Email field cannot be empty';
			return;
		} else if (errors.email?.type === 'pattern') {
			errors.email.message = 'Please, enter a valid email';
			return;
		}
	}

	if (errors.password) {
		if (errors.password?.type === 'required') {
			errors.password.message = "Password can't be empty";
			return;
		} else if (errors.password?.type === 'minLength') {
			errors.password.message = 'Password is too short';
			return;
		} else if (errors.password?.type === 'maxLength') {
			errors.password.message = 'Password is too long';
			return;
		}
	}

	if (errors['password2']?.type === 'validate') {
		errors['password2'].message = "Passwords don't match";
		return;
	}
	return errors;
};
