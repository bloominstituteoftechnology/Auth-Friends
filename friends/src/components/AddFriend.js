import React from 'react';
import {connect} from 'react-redux';

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        }
    }

    render() {
    return (
        <div>
        <form>
            <input 
                type='text'
                name='name'
                placeholder='Name'
                defaultValue=''
            />
            <input 
                type='text'
                name='age'
                placeholder='Age'
                defaultValue=''
            />
            <input 
                type='text'
                name='email'
                placeholder='Email'
                defaultValue=''
            />
        </form>
        <button>Submit</button>
        </div>
    )
}
}

export default AddFriend;