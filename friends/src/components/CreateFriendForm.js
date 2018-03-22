import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { updateFriend } from '../actions';
import { getFriend } from '../actions';

class CreateFriendForm extends Component {
    constructor() {
        super();
        this.state = {

            name: '',
            age: '',
            email: '',
            id: '',
        }
    }

    handleInput = event => {

        // if(this.state.id !== undefined) {
            // getFriend(this.state.id)
            // this.setState({
            //     name: this.props.friend.name,
            //     age: this.props.friend.age,
            //     email: this.props.friend.email,
        //    return console.log(this.props.friend);
        //     }
        

        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    

    handleAdd = event => {
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

    handleUpdate = (event) => {
        event.preventDefault();   

        let { name, age, email } = this.state;
        age = parseInt(age, 10);
        this.props.updateFriend(name, age, email);
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
                <input onChange={this.handleInput} type='text' name='id' value={this.state.id} placeholder='Enter ID' />
                <button onClick={this.handleAdd}> Add Friend </button>
                <button onClick={this.handleUpdate}> Update Friend </button>
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
  
  export default connect(mapStateToProps, { getFriend, updateFriend, addFriend })(CreateFriendForm);


