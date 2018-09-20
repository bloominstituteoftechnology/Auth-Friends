import React from 'react';
import PropTypes from 'prop-types';

const FriendsForm = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
            <label htmlFor='name'>Name</label>
            <input name='name' type='text' placeholder='Name' value={props.friend.name} onChange={props.inputHandler} />
            <br />
            <label htmlFor='age'>Age</label>
            <input name='age' type='number' placeholder='Age' value={props.friend.age} onChange={props.inputHandler} />
            <br />
            <label htmlFor='friendEmail'>Email</label>
            <input name='email' type='text' placeholder='Email' value={props.friend.email} onChange={props.inputHandler} />
            <br /><br />
            <input type='submit' value='Add Friend' />
        </form>
    );
};

FriendsForm.propTypes = {
    inputHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string, 
        age: PropTypes.number,
        email: PropTypes.string
    })
};

export default FriendsForm;
