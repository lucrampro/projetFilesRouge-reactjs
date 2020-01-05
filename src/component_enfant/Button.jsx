  import React from 'react';
/**
 * 
 * COMPOSANT BOUTON REEUTILISABLE !!
 * 
 * Pour choisire le texte dans le bouton il faut passez par une props nomez title  
 */
const Button = ({title}) =>{
  return(
    <div className="button--stavo">
      <p>
        {title}
      </p>
    </div>
  )
}
export default Button