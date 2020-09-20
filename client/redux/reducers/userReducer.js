import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	EMAIL_LOGIN,
	EMAIL_SIGNUP
} from '../constants/userConstants';

const INITIAL_STATE = {
	user: null,
	error: null,
	loading: false,
	restoring: false
};
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_LOGIN:
			return { ...state, loading: true };
		case EMAIL_SIGNUP:
			return { ...state, loading: true };
		case LOGIN_SUCCESS:
			return { ...state, user: action.user, loading: false };
		case LOGIN_FAILURE:
			return { ...state, error: action.error, loading: false };
		case SIGNUP_SUCCESS:
			return { ...state, user: action.user, loading: false };
		case SIGNUP_FAILURE:
			return { ...state, error: action.error, loading: false };
		case LOGOUT_SUCCESS:
			return { ...state, user: null, loading: false };
		case LOGOUT_FAILURE:
			return { ...state, user: null, loading: false };
		default:
			return state;
	}
};

export default userReducer;
