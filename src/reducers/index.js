import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import LangReducer from "./lang";
import CategoriesReducer from "./categories";

const combineRed = combineReducers({
    LangReducer,
    CategoriesReducer,
    // form: formReducer,
});

export default combineRed;