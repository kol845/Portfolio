import React from "react"

import './../css/reset.css';
import './../css/global.css';
import './../css/home.css';


import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home() {
    return (
    <React.Fragment>
        <div className="root">
        <Header isPortfolio={false}/>
        <div id="home-body">
            <div id="left-text-container">
                <div id="headline-container">
                    <h1>
                        Hi, i'm Pebo Hamza
                    </h1>
                    <div id="rect-divider"/>
                </div>
                <p>
                    A enthusiastic full stack developer with a passion for the future of tech.
                    <br/><br/>
                    I have theoretical knowlege from university(KTH) and practical knowlege from vocational education(Hyper Island). The best of both worlds basically.
                </p>
                <div id="skill-container">
                    <p>Frontend <span className="primary-color">/</span> Backend <span className="primary-color">/</span> Software</p>
                </div>
                <button className="cta-button">Portfolio</button>
            </div>
        </div>
        <Footer/>
        </div>
    </React.Fragment>

    );
}
