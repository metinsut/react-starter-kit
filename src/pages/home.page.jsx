import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";

class HomePage extends Component {
    constructor(props) {
        super();
        //Örnek Data Çekme
        // if (!props.isHomeLangReceive) {
        //     props.dispatch(receiveHomeLang());
        // }
    }


    render() {
        return (
            <main role="main">
                <h1>Home</h1>
            </main>
        )
    }
}


//Çekilmiş dataları yükleme
// const mapStateToProps = (state) => ({
//     isHomeLangReceive: state.LangReducer[state.LangReducer.activeLang].home
// });

// export default connect(mapStateToProps)(HomePage);


export default HomePage;

