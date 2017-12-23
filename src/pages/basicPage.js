import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// import Swapi from '../SWAPI-Wrapper/swapi.js';


const BasicPage = (props) => {

    const page = props.page;
    var pageTitle = props.pageTitle;

    // const sw = props.swapi.get('people/').then((result) => {
    //                 var obj = JSON.parse(result);
    //                 console.log(JSON.stringify(obj, null, 4));
    //                 // console.log(result);
    //                 return result.nextPage();
    //             }).then((result) => {
    //                 var obj = JSON.parse(result);
    //                 console.log(JSON.stringify(obj, null, 4));
    //                 // console.log(result);
    //                 return result.previousPage();
    //             }).then((result) => {
    //                 var obj = JSON.parse(result);
    //                 console.log(JSON.stringify(obj, null, 4));
    //                 // console.log(result);
    //             }).catch((err) => {
    //                 console.log(err);
    //             });

    var person;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(e) {
        if (this.readyState     == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           var res = JSON.parse(xhttp.responseText);
           console.log("after change res = ");
           console.log(res);
           person=res;
        }
    };
    xhttp.open("GET", "https://swapi.co/api/people/1", true);
    xhttp.send();

    // fetch('https://swapi.co/api/people').then((result) => {
    //     const res = result;
    //     const json = JSON.parse(res);
    //     document.getElementsByTagName("LI").innerHTML = json;
    //     person = json;
    // },(error)=>{
    //     console.log('error in my fetch: '+error);
    // });

    // person =  sw.getPerson(1).then((result) => {
    //     console.log(result);
    //     return result;
    // });

    // document.title = props.page.title;
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
        name: 'Jason Maurer',
        age: 23,
        }
    }];

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
        }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
        }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
    }];


    return(

        <div>
            <header className="page-header">
              <h1 className="page-title">{pageTitle}</h1>
            </header>


              <ReactTable
                data={data}
                columns={columns}
              />

            <ul>
                <li>
                    {person}
                </li>
            </ul>

            <footer>
                <button className="buttonBack" onClick={props.onClickBack}>
                  Back
                </button>
                <button className="buttonNext" onClick={props.onClickNext}>
                  Next
                </button>
            </footer>
        </div>
    );
};

export default BasicPage;
