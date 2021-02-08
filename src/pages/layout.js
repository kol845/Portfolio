import React from "react"

import './../css/global.css';


import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Layout(props) {

    return (
    <React.Fragment>
        <div className="root">
        <Header isPortfolio={props.isPortfolio}/>
            {props.children}
        <Footer/>
        </div>
    </React.Fragment>

    );
}
