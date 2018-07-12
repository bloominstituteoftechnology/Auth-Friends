import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import logo from '../logo.svg';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.fetchFriends("http://localhost:5000/api/friends/");
    }
 
    render() {
        return(
            <React.Fragment>
                {this.props.fetchingFriends ? (
                    <img src={logo} alt="logo" />
                ) : (
                <React.Fragment>
                    {this.props.friends.map(friend => {
                       return <div className="friend" key={friend.id}>
                            <ul>
                                <li>Name: {friend.name}</li>
                                <li>Age: {friend.age}</li>
                                <li>Email: {friend.email}</li>
                            </ul>
                       </div>
                    })}
                </React.Fragment>
                )}
                {this.props.error !== null ? <p>{this.props.error}</p> : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingFriends: state.fetchingFriends,
        friendsFetched: state.friendsFetched,
        friends: state.friends,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchFriends })(FriendsList);