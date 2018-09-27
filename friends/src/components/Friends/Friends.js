import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { exFriend } from '../actions';

const style = { textDecoration: "line-through"};

const Friends = props => {
    return (
        <Fragment>
            {props.friends.amp(friend => (
                <li
                    style={friend.completed ? style : null}
                    onClick={() => props.exFriend(friend.id)}
                    key={friend=id}
                >
                    {friend.name}
                </li>
            ))}
        </Fragment>
    );
};

export default connect(null, { exFriend })(Friends);