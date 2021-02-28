import React, {useEffect} from "react"

import './../css/portfolio.css';


import data from '../data/static'

import Layout from "../components/layout";
import CaseCard from "../components/CaseCard";
import ContentList from "./../components/ContentList";
import ScrollTopArrow from "./../components/ScrollTopArrow";


import img1 from '../data/images/portfolio/cases/futurekey.png';
import img2 from '../data/images/portfolio/cases/dailyhabits.png';
import img3 from '../data/images/portfolio/cases/not_available.png';
import img4 from '../data/images/portfolio/cases/cryptoVsWallstreet.png';
import img5 from '../data/images/portfolio/cases/gotm.png';
import img6 from '../data/images/portfolio/cases/fakenews.png';

import {debounce, checkScroll} from "../logic/event.js";


const images = [img6, img5, img4, img1, img2, img3]

export default function Portfolio() {

    useEffect(() => {
        window.addEventListener('scroll', debounce(checkScroll))
    });
    return (
    <Layout isPortfolio={true}>                
        <section className="section_container"  id="portf_intro_container">

            <ContentList data={data.projects}/>

        </section>
        
        <div id="projects_container">
            {data.projects.map((project, i) =>{
                const caseImg = images[i];
                let alt = ""
                if(i%2===0){ // Switch to alternative section_container, with the diffrent background image.
                    alt = "section_container_alt"
                };
                const sectionHeight = 800;
                return(
                <section className={"section_container "+alt} key={i}>
                    <div className="ribbon" style={{top:(sectionHeight+sectionHeight*i)+"px"}} id={project.idName}>
                        <div>
                            <p><em>{project.headline.name}</em> - {project.headline.description}</p>
                        </div>
                    </div>
                    <CaseCard project={project} caseImg={caseImg}></CaseCard>
                </section>
            )})}
        </div>
        <ScrollTopArrow/>
    </Layout>

    );
}
