import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render(){
        return (
            <div className='modal'>
                <div> data will be present here from the person data </div>

                <button>cancel</button>
                </div>
            );
    }
}

export default Modal;
