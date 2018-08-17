import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, deleteFriend, updateFriend } from '../actions'

class AddFriend extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleInputChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleAdd = e =>{
        e.preventDefault();        

        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            selected: false
        };

        this.props.addFriend(friend);
        this.setState({ name: '',  age: '', email: '' })
    }

    handleUpdate = e =>{
        e.preventDefault();        

        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            selected: false
        };

        this.props.updateFriend(this.props.id, friend);
        this.setState({ name: '',  age: '', email: '' })
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteFriend(this.props.id)
    }

    render(){console.log(this.props)
        return (
            <form className="add">
                <div>
                    <span>Name:</span>
                    <input onChange = {this.handleInputChange} value = {this.state.name} name = 'name' />
                    <span>Age:</span>
                    <input onChange = {this.handleInputChange} value = {this.state.age} name = 'age' />
                    <span>Email:</span>
                    <input onChange = {this.handleInputChange} value = {this.state.email} name = 'email' /> 
                </div>
                
                <div>
                    <button onClick = {this.handleAdd}>Add Friend</button>
                    <button onClick = {this.handleUpdate}>Update Selected</button>
                    <button onClick = {this.handleDelete}>Delete Selected</button>
                </div>
            
            </form> 
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        id: state.friendsReducer.selectedId
    }
}

export default connect(mapStatetoProps,{ addFriend, deleteFriend, updateFriend })(AddFriend)