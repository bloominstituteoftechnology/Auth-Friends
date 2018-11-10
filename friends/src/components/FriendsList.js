import React from "react";
import { connect } from "react-redux";
import { Alert } from 'reactstrap';

import Friend from '../components/Friend';

const FriendsList = props => {
  return (
    <div>
        {props.loading ? <Alert color='warning'>Where are your friends?</Alert> : null }
        {props.error !== '' ? <Alert color='danger'>props.error</Alert> : null }
        {props.friends.map(item => <Friend key={item.id} friend={item} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        loading: state.fetchingFriends,
        error: state.error
    }
}

export default connect(mapStateToProps)(FriendsList);