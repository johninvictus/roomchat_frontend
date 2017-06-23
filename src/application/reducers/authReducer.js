import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function authReducer(state = initialState.authState, action) {
    switch (action) {

        case types.AUTHENTICATION_SUCCESS:
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


