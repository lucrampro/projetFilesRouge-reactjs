import React from 'react';
// IMPORT DE COMPONENTS
import Header from './Header'
import Footer from './Footer'
import Trais from './Trais--jaune'

//IMPORT DES STYLES, LIBS..
import '../style/contact.scss'
import imgContact from '../assets/img/contact--img.png'
import decoContact from '../assets/img/deco__contact.svg'
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
            <div className="container__title">
                <Trais/>
                <h1>Contactez-nous !</h1>
            </div>
          <p>Contactez nous directement avec ce <span>formulaire </span>;</p>
          <form action="">
            
            <input placeholder="Nom, Prenom"/>
              <input placeholder="Sujet"/>
              <input placeholder="Email"/>
            <textarea placeholder="Votre message" name="" id="" cols="20" rows="10"></textarea>
            <input className="btn_send" type="button" value="Envoyez votre message"/>
          </form>
        </div>
      </div>
      <Footer/>
        <img className="deco__contact" src={decoContact} alt=""/>
    </div>
  );
}
// EXPORT
export default Contact