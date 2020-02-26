import React from 'react';
// IMPORT DES STYLES, LIBS.. 
import '../App.scss'

// DEBUT DU COMPONENTS

const Transport = ({
  title,
  check,
  setApi,
  bus,
  metroAcess,
  metroNonAcess,
  gareAcess,
  gareNonAcess,
  traveaux,
  helpChoise
}) => {

  const List = check.map( (item, i) => {
    // setApi.
    let choiseLink = ''

    if (helpChoise === '1' ) {
      if (i === 0) {
        choiseLink = metroAcess
      } else {
        choiseLink = gareAcess
      }  
    }

    if (helpChoise === '2' ) {
      if (i === 0) {
        choiseLink = metroNonAcess
      } else if (i === 1) {
        choiseLink = gareNonAcess
      } else {
        choiseLink = bus
      } 
    }

    if (helpChoise === '3' ) {
      choiseLink = traveaux
    }
    
    return(
      <li key={`transport__${i}`} >
          <input onClick={() => { 
            setApi(choiseLink);
           }} type="checkbox"/>
          <label htmlFor={item.text}> {item.text}  </label>
      </li>
    )
  })


  return(
    <div className="transport">
      <div className="trais-gris"></div>
      <ul>
        {title}
        {List}
      </ul>
    </div>
  )
}

export default Transport