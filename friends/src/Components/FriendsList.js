import React, {Component} from 'react';
import {connect} from 'react-redux'

import {fetchFriends ,createFriend} from '../Actions/actionCreators'
import Friend from './Friend'

class FriendsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
            buttonDisabled: true
        }
    }

    //Retrieve in Friend Data
    componentDidMount(){
        this.props.fetchFriends();
    }

    changeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
            buttonDisabled: false
        })
    }

    //Used to create new friend
    clickHandler = (event) =>{
        event.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.createFriend(newFriend)
        this.setState({
            name: '',
            age: '',
            email: '',
            buttonDisabled: true
        })
    }

    render(){
        
        if(this.props.loading){
            return <div>Loading...</div>
        }
        if(this.props.error !== null){
            return <div>{this.props.error}</div>
        }
        return(
            <div>
                <form onSubmit={this.clickHandler}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                    <label htmlFor="age">Age: </label>
                    <input type="text" name="age" value={this.state.age} onChange={this.changeHandler}/>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email"value={this.state.email} onChange={this.changeHandler}/>
                    <button 
                        disabled={this.state.buttonDisabled} 
                        type="submit" 
                        className="createFriend">Create New Friend
                    </button>
                </form>
                {this.props.friends.map(friend =>{
                    return <Friend friend={friend} key={friend.id}/>
                })}
            </div>
        )

    }

}

const mapStateToProps = state =>{
    return {
        friends: state.friends,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    fetchFriends,
    createFriend
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList)

