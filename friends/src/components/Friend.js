import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';
import './App.css';

const Friend = props => {
    const { friend, deleteFriend } = props

    const clickHandler = () => {
        deleteFriend(friend.id)
    }

    return (
        <div className='friendContainer' key={friend.id}>
            <span className='close-button' onClick={clickHandler}>Delete Friend</span>
            <h3>Name: {friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <h4>email: {friend.email}</h4>
            <h4>id: {friend.id}</h4>
            <Link to={`/update/${friend.id}`}>Update Friend</Link>
        </div>
    )
}

const mapStateToProps = () => ( {} )

export default connect(mapStateToProps,{deleteFriend})(Friend);