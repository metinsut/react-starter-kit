import axios from 'axios';
import { APIURL,DATA } from "../constants/path";



// JSON DOSYASI ÖRNEĞİ
export const getLayOutLang = () => {
    return axios.get(DATA + "/layoutLang.json")
};

// API ÖRNEĞİ
export const saveContact = (contactInfo) => {
    return axios.post(APIURL + "saveContact","params="+JSON.stringify(contactInfo))
};