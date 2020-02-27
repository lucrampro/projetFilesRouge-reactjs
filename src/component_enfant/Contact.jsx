import React from 'react';
// IMPORT DE COMPONENTS
import Header from './Header'
import Footer from './Footer'
//IMPORT DES STYLES, LIBS.. 
import '../style/contact.scss'
import imgContact from '../assets/img/contact--img.png'
// DEBUT DU COMPONENT

const Contact = () => {
  return(
    <div className="wrapper--contact">
      <Header />
      <div className="contact d-flex">
        <div className="wrapper--img">
          <img src={imgContact} alt=""/>
        </div>
        <div className="wrapper--form">
          <h1>Contactez-nous !</h1>
          <p>Contactez nous directement avec ce formulaire ;</p>
          <form action="">
            
            <input placeholder="Nom, Prenom"/>
            <input placeholder="Sujet"/>
            <input className="message" placeholder="Votre message"/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
// EXPORT
export default Contact