import React from 'react';
import PropTypes from 'prop-types';
import { deleteFriend } from '../actions';
import { connect } from 'react-redux';

const Friend = props => {
    return (
        <tr key={props.friend.id}>
            <td className="field">{props.friend.name}</td>
            <td className="field">{props.friend.age}</td>
            <td className="field">{props.friend.email}</td>
            <td className="delete-update">
                <button className="deleteButton" onClick={() => props.deleteFriend(props.friend.id)}>X</button>
            </td>
            <td className="delete-update">
                <button className="updateButton"><i className="fa">&#xf044;</i></button>
            </td>

        </tr>
    )
}



Friend.propTypes = {
    friend: PropTypes.shape({
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default connect(null, { deleteFriend })(Friend);