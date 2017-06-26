import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {browserHistory} from 'react-router';

export default function authReducer(state = initialState.authState, action) {
    switch (action.type) {
        case types.AUTHENTICATION_SUCCESS:
            browserHistory.push("/");
            return Object.assign({}, state, {
                isAuthenticated: true,
                currentUser: action.response.data
            });

        case types.AUTHENTICATION_FAILURE:
            return Object.assign({}, state, {
                isAuthenticated: false,
                currentUser: {}
            });

        default:
            return state;
    }
}


