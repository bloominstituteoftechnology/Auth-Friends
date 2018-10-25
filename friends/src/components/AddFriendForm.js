import React from 'react';
import {saveFriend} from "../actions";
import {connect} from 'react-redux';

class AddFriendForm extends React.Component {
    constructor() {
        super();
        this.state={
            newFriend: {
                name:'',
                age:'',
                email: ''
            }
        }
    }

    changeHandler=( key, value) => {
this.setState({
    newFriend: {
        ...this.state.newFriend,
        [key]: value
    }
})
    }

addFriend = event => {
    event.preventDefault();
    let friend=this.state.newFriend;
    if (friend.name!=='' && friend.age!=='' && friend.email!=='') {
        this.props.saveFriend(friend);
    this.setState({newFriend:{
        name:'',
        age: '',
        email:''
    }})
    } else {
        alert("Fill out all fields before submitting")
    }
}

    render () {
return (
    <div>
    <form className="add-friend-form"
    onSubmit={this.addFriend}
    >
    <input 
    type="text"
    placeholder="Name"
    value={this.state.newFriend.name}
    name="name"
    onChange={event => this.changeHandler(event.target.name, event.target.value)}
    />
    <input 
    type="text"
    placeholder="Age"
    value={this.state.newFriend.age}
    name="age"
    onChange={event => this.changeHandler(event.target.name, event.target.value)}

/>
    <input 
    type="text"
    placeholder="Email"
    value={this.state.newFriend.email}
    name="email"
    onChange={event => this.changeHandler(event.target.name, event.target.value)}
    />
    <button type="submit">Add new friend</button>
    </form>
    </div>
)
    }
}

const mapStateToProps = state => {
    return {
        saving: state.friendsReducer.saving,
    }
}

export default connect(
    mapStateToProps,
    {saveFriend}
)(AddFriendForm);