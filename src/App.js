import React, { Component } from 'react';

import Modal from './characterModal';
import BasicPage from './basicPage';
import Table from './table';
import {get} from './services/swapiService';

import './App.css';


class App extends Component {

    constructor(props){
        super(props);
    }


  render() {
      const charactersData = [
          {name: "Luke Skywalker", homeworld: "Tatooine"},
          {name: "R2-D2", homeworld: "Naboo"},
      ];
      const planetData = [
          {name: "Tatooine", terrian: "desert", population:200000},
          {name: "Naboo", terrian: "grassy hills, swamps, forest", population:450000000},
      ];
      // <BasicPage page='planets' />
    return (
      <div className="App">

        <BasicPage page='characters' title='Star Wars Characters' headers={['Name','Home Planet']} data={charactersData}/>

          {/*<BasicPage page='planets' title='Star Wars Planets' headers={['Name','Terrian', 'Population']} data={planetData}/>*/}

      </div>
    );
  }
}

export default App;
