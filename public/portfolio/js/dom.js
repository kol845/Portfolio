
function addPortfolioCases(){
    let container = document.querySelector('#projects_container');
    portfolioData.projects.forEach((project, i) => {
        let alt = ""
        if(i%2===0){ // Switch to alternative section_container, with the diffrent background image.
            alt = "section_container_alt"
        };
        // container.innerHTML += `

        //         <section class="section_container `+alt+`">
        //             <div class="ribbon" style="top:`+(600*(i+1))+`px">
        //                 <div>
        //                     <p><em>`+project.headline.name+`</em> - `+project.headline.description+`</p>
        //                 </div>
        //             </div>
        //         </section>`;
        
        let listInfo = createListElement(project.info);
        let listLearnings = createListElement(project.learnings);
        let projectLinks = createProjectLinksElement(project.links);

        let imageSrc = project.imgName;
        if(!imageSrc || imageSrc == ""){ // If the project has no screen shoot image
            imageSrc = "not_available.png";
        }

        const sectionHeight = 800;

        container.innerHTML += `
        <section class="section_container `+alt+`">
            <div class="ribbon" style="top:`+(sectionHeight+sectionHeight*i)+`px" id="`+project.idName+`">
                <div>
                    <p><em>`+project.headline.name+`</em> - `+project.headline.description+`</p>
                </div>
            </div>
            <div class="context_container">
                <div class="context_container_2 ">
                    <div class="context_container_3 hide slide_in_elem">
                        <h2>Info</h2>
                        <div class="i_l_seperation_bar"></div>
                        `+listInfo.outerHTML+`
                    </div>
                    <div class="context_container_3 slide_in_elem">
                        <h2>Learnings</h2>
                        <div class="i_l_seperation_bar"></div>
                        `+listLearnings.outerHTML+`
                    </div>
                </div>


            </div>
            <div class="context_container_right hide slide_in_elem">
                <div class="context_img_container">
                    <img src="public/images/portfolio/`+imageSrc+`" alt="`+project.name+` website">
                </div>
                `+projectLinks.outerHTML+`
            </div>
        </section>
        `
    });
}
function createProjectLinksElement(links){
    let container = document.createElement('div');
    container.classList.add("project_link_container");
    if(links.github){
        container.innerHTML+='<a href="'+links.github+'"><img src="public/images/icons/github.png" alt="Github logo"></a>'
    }
    if(links.website){
        container.innerHTML+='<a href="'+links.website+'"><img src="public/images/icons/website.png" alt="Website icon"></a>'
    }
    
    return container;
}
function createListElement(content){
    let ul = document.createElement('ul');

    content.forEach(elem =>{
        ul.innerHTML+="<li>"+elem+"</li>";
    })

    return ul;
}
function addPortfolioContent(){
    let container = document.getElementById('portf_content_container');
    portfolioData.projects.forEach(project => {
        container.innerHTML+=`
        <div class="content_list_container">
            <p>
                <a class="content_headline" href="#`+project.idName+`">
                    `+project.content.headline+`
                </a>
                <em style="text-align:center;">
                    - 
                </em>
                <em>
                    `+project.content.description+`
                </em>
            </p>
        </div>`
    });
}
addPortfolioContent()
addPortfolioCases()
