import React from 'react';
import { homedir } from 'os';
// DEBUT DU COMPONENT
const Home = () => {
    return (
        <div className="home flex-center">
            <h1>Accueil</h1>
            <img src={"https://via.placeholder.com/200x50"} alt=""/>
            <h1>TITLE</h1>
            <p>PARAGRAPHE</p>
            <p>PARAGRAPHE</p>
            <button>BOUTTON</button>
            <img src={"https://via.placeholder.com/200x50"} alt=""/>
            <p>PARAGRAPHE</p>
            <p>PARAGRAPHE</p>
            <img src={"https://via.placeholder.com/200x50"} alt=""/>
            <p>PARAGRAPHE</p>
            <p>PARAGRAPHE</p>
            <div className="full-size flex-center">
                <p>PARAGRAPHE</p>
                <p>PARAGRAPHE</p>
                <button>BOUTTON</button>
            </div>
            <p>PARAGRAPHE</p>
            <p>PARAGRAPHE</p>
            <button>BOUTTON</button>
            <p>PARAGRAPHE</p>
        </div>
    );
}
// EXPORT
export default Home