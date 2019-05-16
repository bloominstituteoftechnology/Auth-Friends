import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';

class Friendslist extends React.Component {
    componentDidMount() {
     this.props.getData();
    }
    render(){
    if (this.props.fetchingFriends){
        return (<h1>Fetching Friends</h1>)
        }
     return (
         <div className="friendswrapper">    
         {this.props.friends.map(friend => {
             return (
             <div className= "eachfriend" key={friend.id} >
             <p>{friend.name}</p>
             <p>{friend.age}</p>
             <p>{friend.email}</p>
             </div>
         )}
         )}
         </div>
     )   
    }


}

const mapStatetoProps = ({friends, fetchingFriends, updatingFriend, savingFriends, deletingFriends}) => ({
    friends,
    fetchingFriends,
    updatingFriend,
    savingFriends,
    deletingFriends
})

export default
    connect(
        mapStatetoProps,
        { getData }
    )(Friendslist)
