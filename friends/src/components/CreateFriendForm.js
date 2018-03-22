import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {

            name: '',
            age: '',
            email: '',
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    

    handleSubmit = event => {
        event.preventDefault();
        let { name, age, email } = this.state;
        age = parseInt(age, 10);
        this.props.addFriend(name, age, email);
        this.setState({
            name: '',
            age: '',
            email: ''
        });
       
    }

        render(){
            return (
            <div>    
                <input onChange={this.handleInput} type='text' name='name' value={this.state.name} placeholder='Enter your name' /> <br />
                <input onChange={this.handleInput} type='number'name='age' value={this.state.age} placeholder="Enter your age" /> <br />
                <input onChange={this.handleInput} type='email' name='email' value={this.state.email} placeholder="Enter your email"/> <br />
                <button onClick={this.handleSubmit}> Add Friend </button>
                {/* {console.log(this.props)} */}
            </div>    
            )
        }
}


const mapStateToProps = (state) => {
    return {
      friendsGetRequest: state.friendsGetRequest, 
    };
  };
  
  export default connect(mapStateToProps, { addFriend })(CreateFriendForm);


