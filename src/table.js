import React, { Component } from 'react';
import CellData from './cellData';


class Table extends Component {

    constructor(props){
        super(props);
        this.headers = props.headers;
        this.data = props.data;
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        {this.headers.map( row => (
                            <td>
                                <CellData data={row} />
                            </td>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>

                        {this.data.map( row => (
                            <tr>
                                {Object.values(row).map( cell => (
                                    <td><CellData data={cell} /></td>
                                ))}
                            </tr>
                            )
                        )}

                </tbody>
            </table>
        );
    }
}

export default Table;
