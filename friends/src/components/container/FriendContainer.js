import React, { Component } from 'react';

//import FriendForm from '../FriendForm.js';
import FriendList from '../FriendList.js';


class FriendContainer extends Component{
    render(){
        return(
            <React.Fragment>
                <FriendList />
            </React.Fragment>
        )
    }                  
}

export default FriendContainer;