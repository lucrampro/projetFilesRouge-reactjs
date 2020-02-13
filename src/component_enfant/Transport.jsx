import React from 'react';
// IMPORT DES STYLES, LIBS.. 
import '../App.scss'
// DEBUT DU COMPONENTS

const Transport = ({title, check}) => {
  console.log(typeof check)
  const List = check.map( (item) => {
    return(
      <li>
          <input type="checkbox"/>
          <label htmlFor={item.text}> {item.text} </label>
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