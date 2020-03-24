import React from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../Utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            this.setState({
                friends: res.data.friends
            })
        })
    }


    render(){
        return(
        <div>
            

            
        </div>
    )
    }
}
 
export default FriendsList