import React, { Component } from 'react';
import Table from './table';
import './css/tablePage.css';


class TablePage extends Component {

    constructor(props){
        super(props);
        this.page = props.page;
        this.title = props.title;
        this.tabelHeaders = props.tabelHeaders;
        this.data = props.data;
    }


    render() {
        return(

            <div>
                <h2>{this.title}</h2>

                <Table tabelHeaders={this.tabelHeaders} data={this.data}/>
                <button>Back</button>
                <button>Next</button>
            </div>
        );
    }
};

export default TablePage;
