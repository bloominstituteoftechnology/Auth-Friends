import React, { Component } from 'react';
import { createFriend } from '../actions';
import { connect } from 'react-redux';

class CreateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        };
        this.props.createFriend(newFriend);
    }
    
    render() { 
        return (
            <form className="create-friend" onSubmit={this.handleSubmit}>
                <input 
                    // value={this.state.name} 
                    label="Name"
                    placeholder="John"
                    name="name" 
                    onChange={this.handleChange}/>
                <input 
                    // value={this.state.age} 
                    label="Age"
                    placeholder="30"
                    name="age" 
                    onChange={this.handleChange}/>
                <input 
                    // value={this.state.email} 
                    label="Email"
                    placeholder="john@example.com"
                    name="email" 
                    onChange={this.handleChange}/>
                <button className="btn submit">Add Friend</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.saving,
        fetched: state.saved,
        error: state.error
    }
}
 
export default connect(mapStateToProps, { createFriend })(CreateFriend);