import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
    return (
        <div>
            <h3 onClick={() => props.editHandler(props.friend) } >
                {props.friend.name}
                <div onClick={ () => props.deleteFriend(props.friend.id) } >X</div>
            </h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    }),
    editHandler: PropTypes.func.isRequired
};

export default Friend;
