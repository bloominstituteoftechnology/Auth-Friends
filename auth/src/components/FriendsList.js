import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component{
    state = {
        friends: []
    }

    getData  = () => {
        axiosWithAuth()
        .get('/data')
    }

    render(){
        return(
            <div>
            
            </div>
        )
    }
}

export default FriendsList;