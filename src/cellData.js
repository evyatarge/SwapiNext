import React, { Component } from 'react';


class CellData extends Component {

    constructor(props){
        super(props);
        this.data = props.data;
        this.link = props.link;
    }

    render(){
        return (
            <span onClick={this.link? this.link : console.log}>
                {this.data}
            </span>
        );
    }

}

export default CellData;