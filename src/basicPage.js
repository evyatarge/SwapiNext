import React, { Component } from 'react';
import Table from './table';
import './css/basicPage.css';


class BasicPage extends Component {

    constructor(props){
        super(props);
        this.page = props.page;
        this.title = props.title;
    }


    render() {
        return(
            <div>
                <Table data={this.props.data}/>
                <button>Back</button>
                <button>Next</button>
            </div>
        );
    }
};

export default BasicPage;
