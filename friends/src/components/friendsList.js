import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriends } from '../actions';
import Friend from './friend';
import './friend.css'

class  FriendList extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: null,
            email: ''
        }
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    changeHandler = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }
    
    addFriendHandler = () => {
        const { name, age, email} = this.state;
        if(name === '') {
            return;
        }
        this.props.addFriends({ name, age, email})
        this.setState({ name:'', age: '', email: ''})
    }


    render() {
    
        return (
            <div>
                <div className="input-container">
                    <input onChange={this.changeHandler} name="name" value={this.state.name} placeholder="Name"></input>
                    <input onChange={this.changeHandler} name="age" value={this.state.age} placeholder="Age"></input>
                    <input onChange={this.changeHandler} name="email" value={this.state.email} placeholder="Email"></input>
                    <button onClick={()=> this.addFriendHandler()}>Submit</button>
                </div>
                <div className="flex-container">
                    {this.props.friends.map(friend => {
                        return <Friend name={friend.name} email={friend.email} age={friend.age}/>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("inside map", state)
    return {
        friends: state.friends
    }
}

export default connect(
    mapStateToProps,
    {
        fetchFriends,
        addFriends
    }
)(FriendList)

