import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateFriend} from '../actions/friendsActions'

class UpdateFriend extends Component {
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            age: '',
            email:''
        }
    }

    componentDidMount() {
        const {friends, match} = this.props
        const friend = friends.find(friend => friend.id === Number (match.params.id))
        this.setState(friend)
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.updateFriend(this.state)
    }
    
    render() {
        return(
           <form onSubmit={this.submitHandler}>
               <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
                <input type="Number" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age" />
                <input type="Email" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email" />
                <button type='submit'>Update</button>
           </form>
        )
    }
}

const mapStateToProps = state => {

return {
    friends: state.friendsReducer.friends
}
}

export default connect(mapStateToProps, {updateFriend})(UpdateFriend)