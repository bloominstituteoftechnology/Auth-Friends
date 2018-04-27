import React, { Component } from 'react';
import { createFriend } from '../actions';
import { connect } from 'react-redux';



class CreateFriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                name: '',
                age: '',
                email: ''
        }
    };

handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state);

}

handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const newFriend = this.state
    this.props.createFriend(newFriend);
    this.setState({
        name: '',
        age: '',
        email: ''
    });

}

render() {
    return(
        <div>
            <input 
            placeholder="New Friend Name" 
            onChange={this.handleChange} 
            value={this.state.name} 
            name="name"
            />
            <input 
            placeholder="New Friend Age" 
            onChange={this.handleChange} 
            value={this.state.age}
            name="age"

            />
            <input 
            placeholder="New Friend Email" 
            onChange={this.handleChange} 
            value={this.state.email}
            name="email"
 
            />
            <button onClick={this.handleSubmit}>Submit</button>
        </div>

    )
}
}



export default connect(null, { createFriend })(CreateFriendForm);