import React from 'react';
// import { saveAction, editAction } from '../actions';


class UpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
          noteInputText: ""
        }
    }
    // onChange = (e) => {

    // }
    render() {
        return (
            <form>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="age" />
                <input type="text" placeholder="email" />
                <button>{/*Save*/}</button>
            </form>
        )
    }
}

export default UpdateForm;