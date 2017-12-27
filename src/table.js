import React, { Component } from 'react';


class Table extends Component {

    constructor(props){
        super(props);
        this.headers = props.headers;
        this.data = props.data;
    }

    CellData(props){
        return (
            <td onClick={props.link? this.link : () => {}}>
                {props.data}
            </td>
        );
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        {this.headers.map( col => (
                            <this.CellData data={col} />
                            )
                        )}
                    </tr>
                </thead>
                <tbody>

                        {this.data.map( row => (
                            <tr key={row.index}>
                                {Object.values(row).map( cell => (
                                    <this.CellData data={cell} />
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
