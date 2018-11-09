import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend';

class FriendsList extends React.Component{

    render(){
        return(
            <div>
               {this.props.friends.map(friend => {
                   return (
                       <Friend 
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}/>
                   )
               })}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps)(FriendsList);