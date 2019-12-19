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
// IMPORT DES COMPONENTS ENFANTS
import Header from './component_enfant/Header';
import Home from './component_enfant/Home';
import Statistique from './component_enfant/statistique'
// DEBUT DU COMPONENT 
class App extends React.Component{
  state = {}
  render () {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/statistique" exact component={Statistique} />
        </Router>
      </div>
    );
  }
}

// EXPORT
export default App;
