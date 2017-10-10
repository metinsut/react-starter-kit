import * as WebService from '../services/webService';
import * as types from '../constants/actionTypes';


//İÇERDEN DATA ÇEKMEK İÇİN
const receiveLang = (data) => ({
    type: types.RECEIVE_LANG,
    lang: data
});


// DIŞARDAN DATA ÇEKMEK İÇİN
export const receiveLayoutLang = () => dispatch => {
    WebService.getLayOutLang().then((res) => {
        if (res.data.success) {
            dispatch(receiveLang(res.data.success))
        }
    })
};