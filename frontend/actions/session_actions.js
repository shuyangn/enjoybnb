import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});


export const login = user => dispatch => {
    return SessionApiUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
        error => (dispatch(receiveErrors(error.responseJSON)))
    );
};

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
      .then(() => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            error => (dispatch(receiveErrors(error.responseJSON))));
};