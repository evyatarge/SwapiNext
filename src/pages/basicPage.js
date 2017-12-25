import React, { Component } from 'react';
import {get} from '../services/swapiService';
import '../css/basicPage.css';


class BasicPage extends Component {

    constructor(props){
        super(props);
        const page = props.page;
        this.pageTitle = "Star Wars characters";


        this.state = {
            data : [],
        };
    }

    componentDidMount(){
        this.setPersonWithPlanetData();
    }

    setPersonWithPlanetData(){
        var self = this;
        get('https://swapi.co/api/people').then(function(result) {
            result = JSON.parse(result);
            self.setPlanets(result);
        }, function(err) {
            console.log(err);
        });
    }

    setPlanets(persons){
        var self = this;
        var personsNames = self.getPersonsNames(persons.results);
        let data = [];
        for (let person=0; person<(persons.results).length; person++) {
            get(persons.results[person].homeworld).then(function(result) {
                let planet = JSON.parse(result);
                data.push({name: personsNames[person], homePlanet: planet.name});
                self.setState({data:data});
            }, function(err) {
                console.log(err); // Error: "It broke"
            });
        }
    }

    getPersonsNames(personsList){
        var names = [];

        for (var people in personsList) {
            if (personsList.hasOwnProperty(people)) {
                names.push(personsList[people].name);
            }
        }
        return names;
    }

    render() {

        const {data} = this.state;

        return(

            <div>
                <header className="page-header">
                  <h1 className="page-title">{this.pageTitle}</h1>
                </header>

              <table className='table'>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Home Planet</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map(row => (
                          <tr key={row.name}>
                              <td>{row.name}</td>
                              <td>{row.homePlanet}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>

                <footer>
                    <button className="buttonBack" onClick={this.props.onClickBack}>
                      Back
                    </button>
                    <button className="buttonNext" onClick={this.props.onClickNext}>
                      Next
                    </button>
                </footer>
            </div>
        );
    }
};

export default BasicPage;
