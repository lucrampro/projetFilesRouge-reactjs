import React from "react";
// IMPORT DES DEPENDANCE, LIBRAIRIE...
import {
  BrowserRouter as Router,
  Switch, // eslint-disable-line
  Route,
  Link // eslint-disable-line
} from "react-router-dom";
// IMPORT DES STYLE
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
// IMPORT DES COMPONENTS ENFANTS
import Header from './component_enfant/Header.jsx';
import Home from './component_enfant/Home.jsx';
import Carte from './component_enfant/Carte.jsx'
import Contact from './component_enfant/Contact.jsx'
// DEBUT DU COMPONENT 
class App extends React.Component{
  state = {}
  render () {
    return (
      <div className="App container-fluid">
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Carte" exact component={Carte} />
          <Route path="/Contact" exact component={Contact} />
        </Router>
      </div>
    );
  }
}

// EXPORT
export default App;
