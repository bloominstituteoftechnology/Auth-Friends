import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import './Friends.css';
import { deleteFriend } from '../actions';

const Friends = (state) =>{ 
    return (
            <div >
                <ul>
                {state.friendsGetRequest.friends.map((friend, i) => {
                   return ( 
                     <Fragment key={i}>
                        <li key={ friend.id}>
                         <p>{friend.name}</p> 
                         <p>{friend.age}</p>   
                         <p>{friend.email}</p> 
                         <button onClick={state.deleteFriend(friend.id)}> Delete </button>                     
                        </li>
                    </Fragment>
                   );
                })}
                </ul>    
               {/* {console.log(state)} */}
            </div>
    )
}



const mapStateToProps = (state) => {
  return {
    friendsGetRequest: state.friendsGetRequest, 
  };
};

export default connect(mapStateToProps, { deleteFriend })(Friends);