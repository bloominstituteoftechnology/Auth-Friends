import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFriend } from '../actions/FriendsActions'

class CreateFriend extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    inputHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.createFriend(this.state)
    }

    render(){
        return(
        <form onSubmit= {this.submitHandler}>
            <input type="number" name="id" value={this.state.id} onChange={this.inputHandler} placeholder="ID"/>
            <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="NAME"/>
            <input type="number" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="AGE"/>
            <input type="text" name="email" value={this.state.name} onChange={this.inputHandler} placeholder="NAME"/>
            <button type = "submit">ADD</button>
        </form>
        )
    }
}
 
    const mapStateToProps = state => {
        return{}
    }

export default connect(mapStateToProps, { createFriend: createFriend})(CreateFriend)
