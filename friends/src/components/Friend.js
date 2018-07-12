import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
    return (
        <tr key={props.friend.id}>
            <td>{props.friend.name}</td>
            <td>{props.friend.age}</td>
            <td>{props.friend.email}</td>
            <td className="delete-update"><button className="deleteButton">X</button></td>
            <td className="delete-update"><button className="updateButton">&#10004;</button></td>
        </tr>
    )
}

Friend.propTypes = {
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default Friend;