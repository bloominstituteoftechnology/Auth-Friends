import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { createFriends} from '../actions';
import '../App.css';
class FriendForm extends Component {
    state={
        name: '', 
        age: '', 
        email: '', 
    }; 
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value}); 
    }; 

    handleAddFriend = _ => {
        const {name, age, email} = this.state; 
        this.props.createFriends({name, age, email}); 
        this.setState({name: '', age:'', email:''}); 
    }; 
    render() {
        return(
            <form className="layout" onSubmit={() => this.handleAddFriend()}>
            <label className="forms">
                Name:
                <input 
                className="input"
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                />
            </label>
            
            <label className="forms">
                Age:
                <input 
                className="input"
                value={this.state.age}
                name="age"
                placeholder="age"
                type="text"
                onChange={this.handleInputChange}
                />
            </label>
            <label className="forms">
                Email:
                <input 
                className="input"
                value={this.state.email}
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
                />
            </label>
            
            <button type="submit">
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