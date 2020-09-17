export const formValidators = {
	input: {
		email: { required: true, pattern: /^\S+@\S+$/i },
		password: { required: true, maxLength: 256, minLength: 6 },
		passwordConfirm: (value, watch) => {
			return value === watch('password');
		}
	}
};
