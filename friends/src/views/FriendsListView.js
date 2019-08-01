import React from 'react';
import { fetchFriends, addFriend } from '../actions';
import { connect } from 'react-redux';
import { FriendsList, LoginInfo } from '../components';

class FriendsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addFriend: {
                name: "",
                age: "",
                email: ""
            }
        };
    }
    componentDidMount() {
        this.props.fetchFriends();
    }
    onChange(event) {
        event.preventDefault();
        this.setState({...this.state, addFriend: {...this.state.addFriend, [event.target.name]: event.target.value}});
    }
    addFriend(event) {
        event.preventDefault();
        this.props.addFriend(this.state.addFriend);
    }
    render() {
        return (
            <div>
            <LoginInfo key="3" parent={this} />
            <form id="addFriendForm">
                <input type="text" placeholder="Name" required name="name" value={this.state.addFriend.name} onChange={this.onChange.bind(this)} /><br />
                <input type="text" placeholder="Age" required name="age" value={this.state.addFriend.age} onChange={this.onChange.bind(this)} /><br />
                <input type="email" placeholder="E-mail" required name="email" value={this.state.addFriend.email} onChange={this.onChange.bind(this)} /><br />
                <button onClick={this.addFriend.bind(this)}>Add Friend</button>
            </form>
            <div className="friends-list"><FriendsList friends={this.props.friends} /></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(
    mapStateToProps,
    {
        fetchFriends,
        addFriend
    }
)(FriendsListView)