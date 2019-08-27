import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postFriends} from '../store/actions/index'

class FriendsForm extends Component {
    state={
        name: "",
        email: "",
        age: ""
    }
    
    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const friends = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age
        }

        this.props.postFriends(friends)
    }

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChanges}/>
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChanges}/>
                <input type="number" name="age" placeholder="age" value={this.state.age} onChange={this.handleChanges}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    ) }
}

export default connect(null, {postFriends})(FriendsForm)