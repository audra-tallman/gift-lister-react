import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import ShoppingListContainer from './containers/ShoppingListContainer';
import PersonGifts from './containers/PersonGifts';
import PeopleListContainer from './containers/PeopleListContainer'



const App = (props) => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/About" component={About} />
        <Route exact path="/people" component={PeopleListContainer} />
        <Route exact path="/gifts" component={ShoppingListContainer} />
        <Route path="/people/:id" component={PersonGifts} />
        <PeopleListContainer />
      </div>
    </Router>
  );
};





export default (App);
