import {
	UPDATE_EMAIL,
	UPDATE_PASSWORD,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	EMAIL_SIGNUP,
	EMAIL_LOGIN
} from '../constants/userConstants';
import {
	loginUser,
	registerUser,
	SignInWithGoogle,
	SignInWithFacebook,
	sendPasswordResetLink,
	signoutUser
} from '../../utils/firebase';

export const updateEmail = (email) => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	};
};

export const updatePassword = (password) => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	};
};

export const loginStart = () => {
	return {
		type: EMAIL_LOGIN
	};
};
export const loginSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		user
	};
};

export const loginFailure = (error) => {
	switch (error.code) {
		case 'auth/wrong-password':
			return {
				type: LOGIN_FAILURE,
				error: 'Incorrect username or password'
			};
		case 'auth/invalid-email':
			return {
				type: LOGIN_FAILURE,
				error: 'Please enter valid email address'
			};
		case 'auth/user-disabled':
			return {
				type: LOGIN_FAILURE,
				error: 'User is disabled, please contact support'
			};
		case 'auth/user-not-found':
			return {
				type: LOGIN_FAILURE,
				error: 'User not found, please register'
			};
		default:
			return {
				type: LOGIN_FAILURE,
				error: error.message
			};
	}
};

export const signupSuccess = (user) => {
	return {
		type: SIGNUP_SUCCESS,
		user
	};
};

export const signupStart = () => {
	return {
		type: EMAIL_SIGNUP
	};
};

export const signupFailure = (error) => {
	switch (error.code) {
		case 'auth/email-already-in-use':
			return {
				type: SIGNUP_FAILURE,
				error: 'Email already in use'
			};
		case 'auth/invalid-email':
			return {
				type: SIGNUP_FAILURE,
				error: 'Please enter valid email address'
			};
		case 'auth/weak-password':
			return {
				type: SIGNUP_FAILURE,
				error: 'Password entered is too weak'
			};
		default:
			return {
				type: SIGNUP_FAILURE,
				error: error.message
			};
	}
};

export const logoutSuccess = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};

export const logoutFailure = (error) => {
	return {
		type: LOGOUT_FAILURE,
		error
	};
};

export const logoutUser = () => async (dispatch) => {
	try {
		await dispatch(signoutUser());
		dispatch(logoutSuccess());
	} catch (e) {
		dispatch(logoutFailure(e));
	}
};

export const emailLogin = (email, password) => (dispatch) => {
	dispatch(loginStart());
	loginUser(email, password);
};

export const googleLogin = () => async (dispatch) => {
	dispatch(loginStart());
	try {
		const res = await SignInWithGoogle();
		dispatch(
			loginSuccess({
				uid: res.user.uid,
				email: res.user.email,
				emailVerified: res.user.emailVerified,
				name: res.user.displayName
			})
		);
	} catch (e) {
		dispatch(loginFailure(e));
	}
};

export const facebookLogin = () => async (dispatch) => {
	dispatch(loginStart());
	try {
		const res = await SignInWithFacebook();
		dispatch(
			loginSuccess({
				uid: res.user.uid,
				email: res.user.email,
				emailVerified: res.user.emailVerified,
				name: res.user.displayName
			})
		);
	} catch (e) {
		dispatch(loginFailure(e));
	}
};

export const emailSignup = (email, password, verifyEmail) => (dispatch) => {
	dispatch(signupStart());
	registerUser(email, password, verifyEmail);
	dispatch(signupSuccess());
};

export const sendResetPassword = (email) => () => {
	sendPasswordResetLink(email);
};
