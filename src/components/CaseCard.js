import React from 'react';

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
// import PropTypes from 'prop-types';

import "./../css/components/case-card.css";


const CaseCard = (props) => {

    return(
            <div className="card-root">
                <div className="tab-container">
                    <span className="card-tab">
                        About
                    </span>
                    <span className="card-tab">
                        Learnings
                    </span>
                </div>
                <div className="card-body">

                </div>
            </div>
    )
}

export default CaseCard;