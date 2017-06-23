/**
 * Created by invictus on 6/14/17.
 */
import {combineReducers} from 'redux';
import auth from './authReducer';
import validate from './validateReducer';

const rootReducer = combineReducers({
    auth,
    validate
});

export default rootReducer;