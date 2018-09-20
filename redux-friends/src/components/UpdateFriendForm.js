import React, { Component } from 'react'
import { connect } from 'react-redux';
import {updateFriend, deleteFriend} from '../actions'

class UpdateFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }
    handeInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        
        return(
            <form>
                <h2>UPDATE FRIENDS/DELETE FRIENDS</h2>
                <input name={'name'} value = {this.state.name} onChange = {this.handeInput}/>
                <input name={'age'} value = {this.state.age} onChange = {this.handeInput}/>
                <input name={'email'} value = {this.state.email} onChange = {this.handeInput}/>
                <button type = 'button' onClick= {() => {
                    console.log(this.props.friends);
                    const targetFriend = prompt(
                        `who are we updating again? Type there ID here?
                        ${this.props.friends.map(friend => {
                            return (   
                            `
                            Name: ${friend.name} ID: ${friend.id}`
                        )})}`)
                        this.props.updateFriend(this.state, targetFriend)
                }}>UPDATE</button>

                <button type="button" onClick = {() => {
                    const targetFriend = prompt(
                        `who are we deleting from our friends list again? Type there ID here?
                        ${this.props.friends.map(friend => {
                            return (   
                            `
                            Name: ${friend.name} ID: ${friend.id}`
                        )})}`)
                        this.props.deleteFriend(targetFriend)
                }}>
                DELETE
                </button>

            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        updatingFriend: state.updatingFriend,
        friendUpdated: state.friendUpdated,
        friends: state.friends
    }
}

export default connect(mapStateToProps, {updateFriend, deleteFriend})(UpdateFriendForm)