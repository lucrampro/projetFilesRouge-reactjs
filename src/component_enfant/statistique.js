import React from 'react';
// STYLE
import '../App.scss'
// DEBUT DU COMPONENT

const Statistique = () => {
    return(
        <div className="statistique flex-center">
            <h1>statistique</h1>
            <img src={"https://via.placeholder.com/200x50"} alt=""/>
            <p>PARAGRAPE</p>
            <p>PARAGRAPE</p>
            <p>PARAGRAPE</p>
            <button>BUTTON</button>
            <img src={"https://via.placeholder.com/200x50"} alt=""/>
            <p>PARAGRAPHE</p>
            <p>PARAGRAPHE</p>
            <img src={"https://via.placeholder.com/200x50"} alt=""/>
            <p>PARAGRAPHE</p>
            <p>PARAGRAPHE</p>
            <div className="full-size flex-center">
                <p>PARAPGRAPHE</p>
                <p>PARAPGRAPHE</p>
            </div>
        </div>
    )
}
// EXPORT
export default Statistique