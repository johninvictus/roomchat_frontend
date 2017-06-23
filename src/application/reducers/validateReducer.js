import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function validateReducer(state = initialState.validateState, action) {

    switch (action.type) {
        case types.VALIDATE_USERNAME:
            return Object.assign({}, state, {
                usernameAvailable: action.response.available
            });
        case types.VALIDATE_EMAIL:
            return Object.assign({}, state, {
                emailAvailable: action.response.available
            });

        default:
            return state;
    }
}