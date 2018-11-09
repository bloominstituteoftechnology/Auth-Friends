import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions/actions';
import Friend from './Friend';
import './components.css';

class FriendsList extends React.Component{



    render(){
        return(
            <div className="friendContainer">
               {this.props.friends.map(friend => {
                   return (
                       <Friend 
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                        id={friend.id}
                        deleteFriend={this.props.deleteFriend}
                        />
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

export default connect(mapStateToProps, { deleteFriend })(FriendsList);