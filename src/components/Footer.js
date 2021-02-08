import React from 'react';
import "./../css/footer.css";
import github from "./../data/images/icons/github.png";
import linkedin from "./../data/images/icons/linkedin.png";

const Footer = () => (
    <div id="footer_root">
        <div className="footer_content">
            <div className="footer_grid">
                <a href="https://github.com/kol845"><img src={github} alt="Github logo"/></a>
                <a href="https://www.linkedin.com/in/pebo-hamza-32689217b/"><img src={linkedin} alt="Linkedin logo"/></a>
            </div>
            @ 2020 Pebo Hamza
        </div>
    </div>
);

export default Footer;