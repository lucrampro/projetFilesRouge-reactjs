import React from 'react';
// IMPORT DES STYLES, LIBS..
import '../style/graphique.scss'

// DEBUT DU COMPONENT
const Graphique = ({
  // PROPS
  title,
  cheeseCenter,
  firstQuartImage,
  firstQuartTitle,
  firstQuartSubtitle,
  secondQuartImage,
  secondQuartTitle,
  secondQuartSubtitle,
  thirdQuartImage,
  thirdQuartTitle,
  thirdQuartSubtitle,
  fourQuartImage,
  fourQuartTitle,
  fourQuartSubtitle
}) => {
  return(
    <div className="wrapper--graphique">
      <h1>{title}</h1>
      <div className="wrapper--cheese">
      <div className="wrapper--img--center">
        <img alt="" src={cheeseCenter} ></img> 
      </div>
        <div className="cheese">
          <div className="quart one">
            <div className="wrapper--img">
              <img src={firstQuartImage} alt=""/>
            </div>
            <h3>{firstQuartTitle}</h3>
            <p>{firstQuartSubtitle}</p>
          </div>
          <div className="quart two">
            <div className="wrapper--img">
              <img src={secondQuartImage} alt=""/>
            </div>
            <h3>{secondQuartTitle}</h3>
            <p>{secondQuartSubtitle}</p>
          </div>
          <div className="quart three">
            <div className="wrapper--img">
              <img src={thirdQuartImage} alt=""/>
            </div>
            <h3>{thirdQuartTitle}</h3>
            <p>{thirdQuartSubtitle}</p>
          </div>
          <div className="quart four">
            <div className="wrapper--img">
              <img src={fourQuartImage} alt=""/>
            </div>
            <h3>{fourQuartTitle}</h3>
            <p>{fourQuartSubtitle}</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Graphique