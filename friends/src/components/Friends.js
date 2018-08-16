import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend } from '../store/actions'
import UpdateFriendForm from '../components/UpdateFriendForm';
import '../App.css'

class Friends extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true
        }
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    updateClick = () => {
        this.setState(function(prevState) {
        return {isHidden: !prevState.isHidden}
        })
        this.forceUpdate();
    }

    deleteClick = (id) => {
        this.props.deleteFriend(id);
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <h1>My very best friends!</h1>
                <ul>
                    {this.props.friends.map(friend => <li key={friend.name}>{friend.name}, age {friend.age}&nbsp;
                    <button onClick={this.updateClick}>Update</button><UpdateFriendForm id={friend.id} hidden={this.state.isHidden} /> 
                    <button onClick={() => this.deleteClick(friend.id)}>Delete</button><hr/>
                    </li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsReducer.friends,
        fetching: state.friendsReducer.fetchingFriends
    }
}

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(Friends);