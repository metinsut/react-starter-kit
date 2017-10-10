import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from "redux";
import reducer from './reducers';
import { Provider } from "react-redux";
import { receiveLayoutLang } from "./actions/index";
import { BrowserRouter } from "react-router-dom";


const AppClient = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
};

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

let store = createStore(reducer, applyMiddleware(...middleware));


//Sayfa açılır açılmaz dışarı data'dan reducer'a çekilecek ilk data.

// store.dispatch(receiveLayoutLang());


ReactDOM.render(
    <Provider store={store}>
        <AppClient />
    </Provider>,
    document.getElementById('root')
);
