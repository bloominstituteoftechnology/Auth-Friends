import React from 'react';
import { fetchFriends } from '../actions';

class FriendsList extends React.Component {
    
    
    componentDidMount(){
        fetchFriends();
    }
    
    render() {
        console.log(this.props.friends)
        return (
            <h3>Your Friends!</h3>
        )
    }
}



export default FriendsList;