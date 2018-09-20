import React from 'react';
import PropTypes from 'prop-types';

const FriendsForm = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
            <label htmlFor='input1'>Input1</label>
            <input name='input1' type='text' placeholder='Input1' onChange={props.inputHandler} />
            <input type='submit' value='Add Friend' />
        </form>
    );
};

FriendsForm.propTypes = {
    inputHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};

export default FriendsForm;
