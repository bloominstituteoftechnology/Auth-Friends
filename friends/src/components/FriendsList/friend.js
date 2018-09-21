import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const BoldDiv = Styled.div`
    font-weight: bolder;
    cursor: pointer;
`;

const Friend = (props) => {
    return (
        <div>
            <h3 onClick={() => props.editHandler(props.friend) }>{props.friend.name}</h3>
            <BoldDiv onClick={ () => props.deleteFriend(props.friend.id) }>X</BoldDiv>
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
    deleteFriend: PropTypes.func.isRequired, 
    editHandler: PropTypes.func.isRequired
};

export default Friend;
