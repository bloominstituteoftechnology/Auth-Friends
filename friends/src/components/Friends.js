import React, { Component } from 'react';

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
            name: '',
            age: '',
            id: '',
            email: ''
         }
    }
    render() { 
        return ( 
            <div>
                <h2>{this.state.name}</h2>
                <h4>{this.state.email}</h4>
                <h4>{this.state.age}</h4>
                <h4>{this.state.id}</h4>
            </div>
         )
    }
}
 
export default Friends;