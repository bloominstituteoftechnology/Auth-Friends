import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
    return (
        <tr key={props.friend.id}>
            <td className="field">{props.friend.name}<button className="updateButton"><i className="fa">&#xf044;</i></button></td>
            <td className="field">{props.friend.age}<button className="updateButton"><i className="fa">&#xf044;</i></button></td>
            <td className="field">{props.friend.email}<button className="updateButton"><i className="fa">&#xf044;</i></button></td>
            <td className="delete"><button className="deleteButton">X</button></td>
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

export default Friend;