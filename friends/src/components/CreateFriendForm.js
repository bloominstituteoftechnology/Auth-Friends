import React from 'react';
import { addedFriend, fetchData } from '../actions';
import { connect } from 'react-redux';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, });
    }
    handleSubmitFriend = () => {
        console.log('handleSubmitFrined')
        this.props.addedFriend({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        });
    };

    render() {
        return ( 
            <div>
                <input type="text" name='name' onChange={this.handleChange} placeholder='Name' />
                <input type="number" name='age' onChange={this.handleChange} placeholder='Age' />
                <input type="text" name='email' onChange={this.handleChange} placeholder='Email' />
                <button onClick={this.handleSubmitFriend}>Add Friend</button>
            </div>
        );    
    } 
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        addingFriends: state.addingFriends,
        error: state.error
    };
};
 
export default connect(mapStateToProps, { addedFriend, fetchData })(CreateFriendForm);