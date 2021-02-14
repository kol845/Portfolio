import React from "react"

import Header from './Header';
import Footer from './Footer';

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
