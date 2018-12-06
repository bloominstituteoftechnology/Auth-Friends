import React from 'react';
import { connect } from 'react-redux';

import SubmitNewFriend from '../components/SubmitNewFriend';

import { addNewFriend } from '../store/actions';

const SubmitNewFriendView = props => {
    return <SubmitNewFriend addNewFriend={props.addNewFriend} />
}

export default connect(null, { addNewFriend })(SubmitNewFriendView);
