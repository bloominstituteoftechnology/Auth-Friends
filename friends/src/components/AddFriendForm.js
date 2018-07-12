import React from 'react';
import { postFriend } from '../actions';
import { connect } from 'react-redux';

class AddFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

        handleInputChange = event => {
            this.setState({[event.target.name]: event.target.value});
        }

        handleFormSubmit = event => {
            event.preventDefault();
            const URL = 'http://localhost:5000/api/friends/';
            const friend = {
                name: this.state.name,
                age: Number(this.state.age),
                email: this.state.email,
            }
            this.props.postFriend(URL, friend);
            this.setState({ name: '', age: '', email: '' });
        }
    
    render() {
        return(
                <form>
                    <input placeholder="Friend's Name" onChange={this.handleInputChange} name='name' value={this.state.name} />
                    <input type="number" placeholder="Friend's Age" onChange={this.handleInputChange} name='age' value={this.state.age} />
                    <input placeholder="Friend's Email" onChange={this.handleInputChange} name='email' value={this.state.email} />
                    <button type="submit" onClick={this.handleFormSubmit}>Add Friend</button>
                </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        savingFriend: state.savingFriend,
    }
}

export default connect(mapStateToProps, { postFriend })(AddFriendForm);