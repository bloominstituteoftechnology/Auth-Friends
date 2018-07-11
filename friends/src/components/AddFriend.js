import React from 'react';
import {connect} from 'react-redux';
import { addNewFriend } from './../actions';

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        }
    }

    updateForm = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.name);
    }

    addFriend = (event) => {
        event.preventDefault();
        this.props.addNewFriend(
           { name: this.state.name,
            age: this.state.age,
            email: this.state.email}
        );
        console.log(this.state.name)
        this.setState({name: '', age: 0, email: ''})
    }

    render() {
    return (
        <div>
        <form onChange={this.updateForm}>
            <input 
                type='text'
                name='name'
                placeholder='Name'
                defaultValue=''
            />
            <input 
                type='text'
                name='age'
                placeholder='Age'
                defaultValue=''
            />
            <input 
                type='text'
                name='email'
                placeholder='Email'
                defaultValue=''
            />
        </form>
        <button onClick={this.addFriend}>Submit</button>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
      friends: state.friends.friends
    }
  }
  
  const mapActionsToProps = {
    addNewFriend: addNewFriend
  }

export default connect(mapStateToProps, mapActionsToProps)(AddFriend);