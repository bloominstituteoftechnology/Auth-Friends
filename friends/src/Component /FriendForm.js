import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { createFriends} from '../Action '; 

class FriendForm extends Component {
    state={
        name: '', 
        age: '', 
        email: '', 
    }; 
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value}); 
    }; 

    handleAddFriend = e => {
        const {name, age, email} = this.state; 
        this.props.createFriends({name, age, email}); 
        this.setState({name: '', age:'', email:''}); 
    }; 
    render() {
        return(
            <form className="layout">
            <inupt 
            className="input"
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            />
            <input 
            className="input"
            value={this.state.age}
            name="age"
            placeholder="age"
            type="text"
            onChange={this.handleInputChange}
            />
            <input 
            className="input"
            value={this.state.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleAddFriend()} type="button">
            Add New Friend
            </button>
            </form>
        );
    }
}

const mapStateToProps = state =>{
    return{
        error: state.error, 
        creatingFriends: state.creatingFriends
    };
};

export default connect(mapStateToProps, { createFriends })(FriendForm); 