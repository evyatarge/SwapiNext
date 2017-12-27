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
      const data = [
          {name: "Luke Skywalker", homeworld: "Tatooine"},
          {name: "R2-D2", homeworld: "Naboo"}
      ];
      // <BasicPage page='planets' />
    return (
      <div className="App">

        <BasicPage page='characters' title='Star Wars characters' data={data}/>

      </div>
    );
  }
}

export default App;
