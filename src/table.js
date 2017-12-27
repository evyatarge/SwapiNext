import React, { Component } from 'react';


class Table extends Component {

    constructor(props){
        super(props);
        this.data = props.data;
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Home Planet
                        </td>
                    </tr>
                </thead>
                <tbody>

                        {this.data.map( row => (
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.homeworld}</td>
                            </tr>
                            )
                        )}

                </tbody>
            </table>
        );
    }
}

export default Table;
