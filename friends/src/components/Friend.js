import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const Friend = props => {
    const { friend, deleteFriend } = props;

    const clickHandler = () => {
        deleteFriend(friend.id)
    }
    
    return (
        <div key={friend.id}>
        <p onClick={clickHandler}>X</p>
        <h2>{friend.name}</h2>
        <h4>{friend.age}</h4>
        <p>{friend.email}</p>
        <Link to={`/update/${friend.id}`}>Update</Link>
      </div>
    )
}

const mapStateToProps = () = ({});
export default connect(mapStateToProps, { deleteFriend })(Friend)