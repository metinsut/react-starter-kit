import {RECEIVE_CATEGORIES} from '../constants/actionTypes'
const initialState = {en:[],tr:[],ar:[]};

const CategoriesReducer = (state=initialState,action)=>{
    switch (action.type){
        case RECEIVE_CATEGORIES:
            return{
                ...action.categories
            };
        default:
            return state
    }
};

export default CategoriesReducer;