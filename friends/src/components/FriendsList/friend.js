import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
    return (
        <div>
            <p>friend</p>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    })
};

export default Friend;
