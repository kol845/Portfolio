import React, {useEffect} from "react"

import './../css/portfolio.css';


import data from '../data/static'

import Layout from "../components/layout";
import CaseCard from "../components/CaseCard";
import ContentList from "./../components/ContentList";
import ScrollTopArrow from "./../components/ScrollTopArrow";


import img1 from '../data/images/portfolio/cases/futurekey.png';
import img2 from '../data/images/portfolio/cases/dailyhabits.gif';
import img3 from '../data/images/portfolio/cases/not_available.png';
import img4 from '../data/images/portfolio/cases/cryptoVsWallstreet.png';

import gitIcon from '../data/images/icons/github.png';
import webIcon from '../data/images/icons/website.png';

import {debounce, checkScroll} from "../logic/event.js";


const images = [img4, img1, img2, img3]

const createListElement = (content)=>{
    const listElems = []
    content.forEach((elem, i) =>{
    listElems.push(<li key={i}>{elem}</li>)
    })
    return (
    <ul>
        {listElems}
    </ul>
    )

}
const createProjectLinksElement = (links)=>{
    let linksArray = []
    if(links.github){
        linksArray.push(<a href={links.github}><img src={gitIcon} alt="Github logo"/></a>)
    }
    if(links.website){
        linksArray.push(<a href={links.website}><img src={webIcon} alt="Website Icon"/></a>)
    }
    
return linksArray;
}


const getPortfolioCases = () => {
    const cases = []
    data.projects.forEach((project, i) =>{
        const caseImg = images[i];
        let alt = ""
        if(i%2===0){ // Switch to alternative section_container, with the diffrent background image.
            alt = "section_container_alt"
        };

        let listInfo = createListElement(project.info);
        let listLearnings = createListElement(project.learnings);
        let projectLinks = createProjectLinksElement(project.links);
        

        const sectionHeight = 800;

        cases.push(
        <section className={"section_container "+alt} key={i}>
            <div className="ribbon" style={{top:(sectionHeight+sectionHeight*i)+"px"}} id={project.idName}>
                <div>
                    <p><em>{project.headline.name}</em> - {project.headline.description}</p>
                </div>
            </div>
            
            <div className="context_container">
                <div className="context_container_2 ">
                    <div className="context_container_3 slide_in_elem hide">
                        <h2>Info</h2>
                        <div className="i_l_seperation_bar"></div>
                        {listInfo}
                    </div>
                    <div className="context_container_3 slide_in_elem hide">
                        <h2>Learnings</h2>
                        <div className="i_l_seperation_bar"></div>
                        {listLearnings}
                    </div>
                </div>
            </div>
            
            <div className="context_container_right slide_in_elem hide">
                <div className="context_img_container">
                    <img src={caseImg} alt={project.name+" website"}/>
                </div>
                <div className="project_link_container">
                    {projectLinks}
                </div>
            </div>
        </section>
    )});
    return cases;
}

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
                <div className="card-container">
                    <CaseCard project={project} caseImg={caseImg}></CaseCard>
                </div>
            </section>
        )})}
        </div>
        <ScrollTopArrow/>
    </Layout>

    );
}
