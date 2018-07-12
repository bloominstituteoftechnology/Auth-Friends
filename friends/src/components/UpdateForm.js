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
        console.log(this.props.friends[this.props.id-1]);
    }

    updateFriend = (event, index) => {
        event.preventDefault();
        const id = this.props.friends[this.props.id-1].id
        console.log(id);
        this.props.updateFriend(this.props.friends[this.props.id-1].id,
           { name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }
        );
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
      friends: state.friends.friends
    }
  }
  
  const mapActionsToProps = {
    updateFriend: updateFriend
  }

export default connect(mapStateToProps, mapActionsToProps)(UpdateForm);