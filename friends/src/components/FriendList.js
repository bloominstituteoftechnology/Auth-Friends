import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { deleteFriend } from '../actions';
import { getFriend } from '../actions';
import './FriendList.css';


const Friends = (state) =>{
    return (
            <div >
                <ul>
                {state.friends.map((friend, i) => {
                   return (
                     <Fragment key={i}>
                        <li key={friend.id}>
                         <p>{friend.id}</p>
                         <p>{friend.name}</p>
                         <p>{friend.age}</p>
                         <p>{friend.email}</p>
                         <button className='deleteButton' onClick={()=>{state.deleteFriend(friend.id)}}> Delete </button>
                        </li>
                    </Fragment>
                   );
                })}
                </ul>
            </div>
    )
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { getFriend, deleteFriend })(Friends);
