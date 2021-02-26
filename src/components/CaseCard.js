import React, { useState } from 'react';

import "./../css/components/case-card.css";


const CaseCard = (props) => {
    let [about, setAbout] = useState(false);
    let [learnings, setLearnings] = useState(false);
    let [active, setActive] = useState(false);
    const clickAbout =()=>{
        setAbout(!about);
        setLearnings(false)
    }
    const clickLearnings =()=>{
        setLearnings(!learnings);
        setAbout(false)
    }
    return(
            <div className="card-root">
                <div className="tab-container">
                <button className={'card-tab '+((about ? "card-highlight":""))}
                    onMouseEnter={() => {
                        setActive(true);
                    }}
                    onMouseLeave={() => {
                        setActive(false);
                    }}
                    onClick={() => clickAbout()}
                    >
                        About
                    </button>
                    <div className={'tab-devider '+((about||learnings||active ? "hide":""))}/>
                    <button className={'card-tab '+((learnings ? "card-highlight":""))}
                    onMouseEnter={() => {
                        setActive(true);
                    }}
                    onMouseLeave={() => {
                        setActive(false);
                    }}
                    onClick={() => clickLearnings()}
                    >
                        Learnings
                    </button>
                </div>
                
                <div className="card-body"style={{backgroundImage:`url(${props.caseImg})`}}>
                    {/* <img src={props.caseImg}/> */}
                </div>
            </div>
    )
}



export default CaseCard;