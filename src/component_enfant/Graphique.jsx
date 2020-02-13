import React from 'react';
// IMPORT DES STYLES, LIBS..
import '../style/graphique.scss'

// DEBUT DU COMPONENT
const Graphique = ({firstQuartImage, firstQuartTitle, firstQuartSubtitle, secondQuartImage, secondQuartTitle, secondQuartSubtitle}) => {
  return(
    <div className="wrapper--graphique">
      <h1>Les Jeux Olympiques en quelques chiffres</h1>
      <div className="wrapper--cheese">
      <div className="cheese">
        <div className="quart one">
          <img src={firstQuartImage} alt=""/>
          <h3>{firstQuartTitle}</h3>
          <p>{firstQuartSubtitle}</p>
        </div>
        <div className="quart two">
          <img src={secondQuartImage} alt=""/>
          <h3>{secondQuartTitle}</h3>
          <p>{secondQuartSubtitle}</p>
        </div>
        <div className="quart three"></div>
        <div className="quart four"></div>
      </div>
      </div>
    </div>
  )
}

export default Graphique