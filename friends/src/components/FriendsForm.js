import React from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';

class FriendsForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handlesChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addFriend = event => {
        event.preventDefault();
        this.props.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: '',
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <input 
                        type='text'
                        name='name' 
                        value={this.state.name}
                        placeholder={`Friend's name`}
                        onChange={this.handlesChange}
                        required
                    />
                    <input 
                        type='number'
                        name='age' 
                        value={this.state.age}
                        placeholder={`Age`}
                        onChange={this.handlesChange}
                        required
                    />
                    <input 
                        type='email'
                        name='email' 
                        value={this.state.email}
                        placeholder={`E-mail`}
                        onChange={this.handlesChange}
                        required
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps, { addFriend })(FriendsForm);