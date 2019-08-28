import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteFriends, updateFriends } from "../store/actions/index"


class FriendsList extends Component {
    state = {
        update: "",
        updateToggle: false
    }

    deleteFriends = () => {
        this.props.deleteFriends(this.props.friend.id)
    }

    updateFriends = (e) => {
        e.preventDefault()

        const updated = {
            name: this.state.update,
            age: this.props.friend.age,
            email: this.props.email
        }

        this.props.updateFriends(this.props.friend.id, updated)
    }

    changeHandler2 = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    render() {
    return(
        <div>
            <h1>{this.props.friend.name}</h1>
            <p>{this.props.friend.age}</p>
            <p>{this.props.friend.email}</p>
            <button onClick={this.deleteFriends}> DEL </button>
            <button onClick={() => {this.setState({updateToggle: !this.state.updateToggle})}}> EDIT </button>
            {this.state.updateToggle ?
            <div>
            <button onClick={this.updateFriends}> UPD </button> 
            <input
            name="update"
            placeholder="Update your name here.."
            value={this.state.update}
            onChange={this.changeHandler2} /> </div> : null}
        </div>
    ) }
}

export default connect(null, {deleteFriends, updateFriends})(FriendsList)