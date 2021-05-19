import changeTheNumber from './upDown';
import multDivideNumber from './multDivide'

import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    changeTheNumber,
    multDivideNumber
});

export default rootReducer;

