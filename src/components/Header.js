import React from 'react';
import "./../css/header.css";
const getPortf = (isPortfolio)=>{
    if(isPortfolio) return <a href="/" className="header_links selected">Portfolio</a>
    return <a href="/" className="header_links ">Portfolio</a>
}

const Header = (props) => (
    <div className="header">
        <div className="header_content" id="myTopnav">
            <span className="home_btn_container">
                <p className="header_home" >Pebo Hamza</p>
            </span>
            <span className="link_btn_container">
                {getPortf(props.isPortfolio)}
            </span>
        </div>
    </div>
);

export default Header;