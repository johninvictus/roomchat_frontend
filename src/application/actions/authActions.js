import * as types from './actionTypes';
import * as constant from '../config/constants';
import Api from '../api';

function setCUrrentUser(dispatch, response) {
    localStorage.setItem(constant.TOKEN, JSON.stringify(response.meta.token))

    dispatch({
        type: types.AUTHENTICATION_SUCCESS,
        response
    });
}

function unSetUser(dispatch) {
    localStorage.removeItem(constant.TOKEN);
    dispatch({
        type: types.LOGOUT
    });
}

function setUsernameAvailability(dispatch, response) {
    dispatch({
        type: types.VALIDATE_USERNAME,
        response
    })
}

function setEmailAvailability(dispatch, response) {
    dispatch({
        type: types.VALIDATE_EMAIL,
        response
    })
}

export function login(data) {
    return dispatch => Api.post('/sessions', data)
        .then((response) => {
            setCUrrentUser(dispatch, response);
        });
}

export function signup(data) {
    return dispatch => Api.post('/users', data)
        .then((response) => {
            setCUrrentUser(dispatch, response);
        })
}

export function logout() {
    return dispatch => Api.delete('/sessions')
        .then(() => {
            unSetUser(dispatch)
        });
}


export function authenticate() {
    return dispatch =>Api.post('/sessions/referesh')
        .then(response => {
            setCUrrentUser(dispatch, response);
        })
        .catch(() => {
            localStorage.removeItem(constant.TOKEN);
            window.location = '/login';
        });
}


export function validateUserName(data) {
    return dispatch => Api.post('/sessions/validateuser', data)
        .then(response => {
            setUsernameAvailability(dispatch, response)
        })
}

export function validateEmailAddress(data) {
    return dispatch => Api.post('/sessions/validatemail', data)
        .then(response => {
            setEmailAvailability(dispatch, response)
        })
}







