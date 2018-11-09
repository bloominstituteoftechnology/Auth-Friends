import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

import styled from 'styled-components';

const Container = styled.div`
    /* Bob */
    @-webkit-keyframes hvr-bob {
    0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    @keyframes hvr-bob {
    0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    @-webkit-keyframes hvr-bob-float {
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }
    @keyframes hvr-bob-float {
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    }

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

        &:hover, &:focus, &:active {
        -webkit-animation-name: hvr-bob-float, hvr-bob;
        animation-name: hvr-bob-float, hvr-bob;
        -webkit-animation-duration: .3s, 1.5s;
        animation-duration: .3s, 1.5s;
        -webkit-animation-delay: 0s, .3s;
        animation-delay: 0s, .3s;
        -webkit-animation-timing-function: ease-out, ease-in-out;
        animation-timing-function: ease-out, ease-in-out;
        -webkit-animation-iteration-count: 1, infinite;
        animation-iteration-count: 1, infinite;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-direction: normal, alternate;
        animation-direction: normal, alternate;
        }
`;

const FriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 10px;
    margin: 25px;
    border-radius: 3px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const ActionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Friend = props => {
    const { friend, deleteFriend } = props;

    const clickHandler = () => {
        deleteFriend(friend.id)
    }
    
    return (
        <Container>
            <FriendContainer key={friend.id}>
                <h2>{friend.name}</h2>
                <h4>{friend.age}</h4>
                <p>{friend.email}</p>
                <ActionRow>
                    <Link to={`/update/${friend.id}`}><button className="button button-outline">Update</button></Link>
                    <button className="button button-clear" onClick={clickHandler}>Delete</button>
                </ActionRow>
        </FriendContainer>
      </Container>
    )
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, { deleteFriend })(Friend)