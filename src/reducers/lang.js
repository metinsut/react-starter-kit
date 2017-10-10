import { RECEIVE_LANG, CHANGE_LANG } from '../constants/actionTypes';

const initialState = { activeLang: "tr", en: {}, tr: {}, ar: {} };

const LangReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_LANG:
            return {
                ...state,
                en: {
                    ...state.en,
                    ...action.lang.en
                },
                tr: {
                    ...state.tr,
                    ...action.lang.tr
                },
                ar: {
                    ...state.tr,
                    ...action.lang.tr
                }
            };
        case CHANGE_LANG:
            return {
                ...state,
                activeLang: action.activeLang
            };
        default:
            return state;
    }
};

export default LangReducer;