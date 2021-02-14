import React from "react"
import './../css/content-list.css';
import { Link } from "react-scroll"

const ContentList = (props) => {

    return (
    <React.Fragment>
        <div id="content_container_outer">
            <div id="content_container_inner">
                <h2>Contents</h2>
                <div id="portf_content_container">
                    {props.data.map(item => 
                        <div className="content_list_container" key={item.id}> 
                            
                            <p>
                                <span class="dot"/>
                                <Link
                                    activeClass="active"
                                    to={item.idName}
                                    spy={true}
                                    smooth={true}
                                    offset={-0}
                                    duration={0}
                                >   
                                    <a className="content_headline">
                                        {item.content.headline}
                                    </a>
                                </Link>
                

                                <em>
                                    - {item.content.description}
                                </em>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </React.Fragment>

    );
}

export default ContentList;