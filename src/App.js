import React, { Component } from 'react';

import Modal from './characterModal';
import TablePage from './tablePage';
import {getCharactersData} from './services/swapiService';

import './css/App.css';


class App extends Component {

    constructor(props){
        super(props);
    }



  render() {
        const charactersData = getCharactersData;
      // const charactersData = [
      //     {name: "Luke Skywalker", homeworld: "Tatooine"},
      //     {name: "R2-D2", homeworld: "Naboo"},
      // ];
      // const planetData = [
      //     {name: "Tatooine", terrian: "desert", population:200000},
      //     {name: "Naboo", terrian: "grassy hills, swamps, forest", population:450000000},
      // ];
      // <TablePage page='planets' />
    return (
      <div className="App">

        <TablePage page='people' title='Star Wars Characters' tabelHeaders={['Name','Home Planet']} data={charactersData}/>

          {/*<TablePage page='planets' title='Star Wars Planets' headers={['Name','Terrian', 'Population']} data={planetData}/>*/}

      </div>
    );
  }
}

export default App;
