import React, { useState } from "react"

import "./../css/components/case-card.css"

import gitIcon from "../data/images/icons/github.png"
import webIcon from "../data/images/icons/website.png"

const createListElement = content => {
  const listElems = []
  content.forEach((elem, i) => {
    listElems.push(<li key={i}>{elem}</li>)
  })
  return <ul>{listElems}</ul>
}
const createProjectLinksElement = links => {
  let linksArray = []
  if (links.github) {
    linksArray.push(
      <a href={links.github}>
        <img src={gitIcon} alt="Github logo" />
      </a>
    )
  }
  if (links.github2) {
    linksArray.push(
      <a href={links.github2}>
        <img src={gitIcon} alt="Github logo" />
      </a>
    )
  }
  if (links.website) {
    linksArray.push(
      <a href={links.website}>
        <img src={webIcon} alt="Website Icon" />
      </a>
    )
  }

  return linksArray
}

const CaseCard = props => {
  let [about, setAbout] = useState(true)
  let [learnings, setLearnings] = useState(false)
  let [active, setActive] = useState(false) // Used to remove tab seperator bar on hover
  let [imageId, imageID] = useState(0)
  const clickAbout = () => {
    setAbout(!about)
    setLearnings(false)
  }
  const clickLearnings = () => {
    setLearnings(!learnings)
    setAbout(false)
  }
  let listAbout = createListElement(props.project.info)
  let listLearnings = createListElement(props.project.learnings)
  let selectedList = about ? listAbout : listLearnings
  let projectLinks = createProjectLinksElement(props.project.links)

  return (
    <div className="card-root animated hide">
      <div className="tab-container">
        <button
          className={"card-tab " + (about ? "card-highlight" : "")}
          onMouseEnter={() => {
            setActive(true)
          }}
          onMouseLeave={() => {
            setActive(false)
          }}
          onClick={() => clickAbout()}
        >
          About
        </button>
        <div
          className={
            "tab-devider " + (about || learnings || active ? "hide" : "")
          }
        />
        <button
          className={"card-tab " + (learnings ? "card-highlight" : "")}
          onMouseEnter={() => {
            setActive(true)
          }}
          onMouseLeave={() => {
            setActive(false)
          }}
          onClick={() => clickLearnings()}
        >
          Learnings
        </button>
      </div>

      <div
        className="card-body"
        style={{
          backgroundImage: `url(${props?.caseImg ? props.caseImg[0] : ""})`,
        }}
      >
        {(about || learnings) && (
          <div className="info-container">{selectedList}</div>
        )}
      </div>
      <div className="project_link_container">{projectLinks}</div>
    </div>
  )
}

export default CaseCard
