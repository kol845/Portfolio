
function addPortfolioCases(){
    let container = document.querySelector('#projects_container');
    console.log(container)
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
        container.innerHTML += `
        <section class="section_container `+alt+`">
            <div class="ribbon" style="top:`+(800+800*i)+`px" id="`+project.idName+`">
                <div>
                    <p><em>`+project.headline.name+`</em> - `+project.headline.description+`</p>
                </div>
            </div>
            <div class="context_container">
                <div class="context_container_2">
                    <div class="context_container_3">
                        <h2>Info</h2>
                        <div class="i_l_seperation_bar"></div>
                        `+listInfo.outerHTML+`
                    </div>
                    <div class="context_container_3">
                        <h2>Learnings</h2>
                        <div class="i_l_seperation_bar"></div>
                        `+listLearnings.outerHTML+`
                    </div>
                </div>
            </div>
            <div class="context_container_right">
                <div class="context_img_container">
                    <img src="public/images/portfolio/`+project.imgName+`" alt="`+project.name+` website">    
                </div>
            </div>
        </section>
        `
    });
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