import React, { Component } from 'react';


class CellData extends Component {

    constructor(props){
        super(props);
        this.data = props.data;
    }

    render(){
        return (
            <span>
                this.data;
            </span>
        );
    }

}

export default CellData;