import React from 'react';
import {connect} from 'react-redux';

import EditFriend from '../Forms/EditFriend';
import {deleteFriend} from '../../actions/index';

const FriendCard = props => {
    const callDelete = e => {
        e.preventDefault();
        props.deleteFriend(props.friend.id);
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td><button onClick={callDelete}>Delete Friend</button></td>
                </tr>
                <tr>
                    <td>{props.friend.id}</td>
                    <td>{props.friend.name}</td>
                </tr>
                <tr>
                    <td>{props.friend.email}</td>
                </tr>
                <tr>
                    <td>
                        <EditFriend id={props.friend.id} type='Edit Friend'/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    return ({

    })
}

export default connect(mapStateToProps, {deleteFriend})(FriendCard);