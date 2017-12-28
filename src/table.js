import React, { Component } from 'react';


class Table extends Component {

    constructor(props){
        super(props);
        this.tabelHeaders = props.tabelHeaders;
        this.data = props.data;
        this.state = {
            tableData : [],
        }
    }

    componentDidMount(){
        this.setState({tableData:this.data()});
    }

    // CellData(props){
    //     return (
    //         <td onClick={props.link? this.link : () => {}}>
    //             {props.data}
    //         </td>
    //     );
    // }

    render(){
        const tableData = this.state.tableData===undefined? [] : this.state.tableData;
        return(
            <table>
                <thead>
                    <tr>
                        {this.tabelHeaders.map( col => (
                            col

                            )
                        )}
                    </tr>
                </thead>
                <tbody>

                        {tableData.map( row => (
                            <tr key={row.index}>
                                {Object.values(row).map( cell => (
                                    cell
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
