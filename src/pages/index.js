import React, {useEffect} from "react"
import './../css/reset.css';
import './../css/global.css';
import './../css/portfolio.css';

import profileImg from '../images/portfolio/transparent_round_profile.png';

import data from '../data/static'

import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../images/portfolio/cases/futurekey.png';
import img2 from '../images/portfolio/cases/dailyhabits.gif';
import img3 from '../images/portfolio/cases/not_available.png';
import img4 from '../images/portfolio/cases/cryptoVsWallstreet.png';

import gitIcon from '../images/icons/github.png';
import webIcon from '../images/icons/website.png';

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


const getContents = ()=>{
    const contents = []
    data.projects.forEach((project, i) =>{contents.push(
        // this key thing seems to stop a error. But what does it do??
        <div className="content_list_container" key={i}> 
            <p>
                <a className="content_headline" href={"#"+project.idName}>
                    {project.content.headline}
                </a>
                <em style={{textAlign:"center"}}>
                    - 
                </em>
                <em>
                    {project.content.description}
                </em>
            </p>
        </div>
    )});
    return contents;
}
const getPortfolioCases = ()=>{
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
    <React.Fragment>
        <div className="root">
        <Header isPortfolio={true}/>
                <section className="section_container" style={{backgroundColor:"orange"}} id="portf_intro_container">
                    <div id="welcome_container">
                        <div id="profile_picture_container">
                            <div className="line_seperator"></div>

                            <img id="profile_picture" src={profileImg} alt="Profile"/>

                        </div>

                        <div id="portf_welcome_message">
                            <p style={{fontWeight:"bold"}}>Welcome to my portfolio!</p><br/>
                            <p>Here is a showcase of some projects that i’ve created during my years in KTH, Hyperisland and on my free time.</p>
                        </div>
                    </div>

                    <div id="content_container">
                        <h2>Content:</h2>
                        <div id="portf_content_container">
                            {/* {data.projects.forEach(project => {getContent(project)})} */}
                            {getContents()}
                        </div>
                    </div>
                </section>
                <div id="projects_container">
                    {getPortfolioCases()}
                </div>

                





        <Footer/>
        </div>
    </React.Fragment>

    );
}
