import React, { Component } from 'react';

import modal from './modal/characterModal';
import CharactersPage from './pages/charactersPage';
import PlanetsPage from './pages/planetsPage';
import BasicPage from './pages/basicPage';

import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            page: null,
            pageTitle: "",
        };
    }

  render() {
    return (
      <div className="App">

        <BasicPage page = {this.state.page}/>

      </div>
    );
  }
}

export default App;
