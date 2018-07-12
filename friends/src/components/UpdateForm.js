import React from 'react';
import {connect} from 'react-redux';
import { updateFriend } from './../actions';

class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        }
    }

    editForm = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
        console.log(this.props);
    }

    updateFriend = (event) => {
        event.preventDefault();
        console.log(this.state);
        const id = this.state.match.params.id
        this.props.updateFriend(
           { name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        id: id}
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
                onChange={this.editForm}
            />
            <input 
                type='text'
                name='age'
                placeholder='Age'
                defaultValue=''
                onChange={this.editForm}
            />
            <input 
                type='text'
                name='email'
                placeholder='email'
                defaultValue=''
                onChange={this.editForm}
            />
        </form>
        <button onClick={this.updateFriend}>Submit</button>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
      friend: state.friends.friends.id
    }
  }
  
  const mapActionsToProps = {
    updateFriend: updateFriend
  }

export default connect(mapStateToProps, mapActionsToProps)(UpdateForm);