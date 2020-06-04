import { combineReducers } from 'redux';
import IslemReducers from './IslemReducers';

export default combineReducers({
    IslemResponse: IslemReducers
});