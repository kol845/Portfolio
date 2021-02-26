import React from "react"

import './../css/home.css';
import {navigate} from 'gatsby'; //import navigate from gatsby


import Layout from "./../components/layout"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home() {
    const data = useStaticQuery(graphql`
        query {
        file(relativePath: { eq: "images/home/shot_3.png" }) {
            childImageSharp {
                # Specify a fixed image and fragment.
                # The default width is 400 pixels
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        }
    `)
    const portfolioPage = (index)=> {
        navigate('/portfolio'); //navigate to edit page
    }
    return (
    <Layout isPortfolio={false}>

        <div id="home-body">
            <div id="left-text-container">
                <div id="headline-container">
                    <h1>
                        Hi, I'm Pebo Hamza
                    </h1>
                    <div id="rect-divider"/>
                </div>
                <p>
                    An enthusiastic full stack developer with a passion for the future of tech.
                    <br/><br/>
                    I have theoretical knowledge from university, <span style={{fontWeight:'bold'}}>KTH</span>, 
                    and practical knowledge from vocational education, <span style={{fontWeight:'bold'}}>Hyper Island</span>. 
                    The best of both worlds basically.
                </p>
                <div id="skill-container">
                    <p>Backend <span className="primary-color">/</span> Frontend <span className="primary-color">/</span> Software</p>
                </div>
                <button className="cta-button" onClick={()=>portfolioPage()}>Portfolio</button>
            </div>
            <div id="right-content-container">
                <Img
                    fixed={data.file.childImageSharp.fixed}
                    alt="Pebo posing in suite. Looking professional."
                />
            </div>
        </div>

    </Layout>

    );
}
