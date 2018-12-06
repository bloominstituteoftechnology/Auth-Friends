import React from 'react';
import { connect } from 'react-redux';

import { addNewFriend } from '../actions';

import CreateForm from '../components/CreateFriendForm';

function CreateFormView(props) {
    return <CreateForm {...props} />
}

export default connect(
    null,
    { addNewFriend }
) (CreateFormView);