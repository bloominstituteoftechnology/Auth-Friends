import React, { Component } from 'react';
import { addFriend } from '../actions/actions';
import { connect } from 'react-redux';

class Form extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input 
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    />
                    <label>Age: </label>
                    <input 
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleInputChange}
                    />
                    <label>Email: </label>
                    <input 
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />
                    <button type="submit">Add Friend</button>
                </form>
                
            </div>
        )
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type === 'number') {
            value = Number(value);
        };

        this.setState( { [name]: value } )
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(this.state
            // name = this.state.name,
            // age = this.state.age,
            // email = this.state.email
        );
        this.setState({
            name:'',
            age:'',
            email:''
        });

    }

}

const mapStateToProps = state => {
    return {
        addingFriends : state.addingFriends,
        friendsAdded: state.friendsAdded,
        error: state.error
    };
};

export default connect(mapStateToProps, { addFriend })(Form);