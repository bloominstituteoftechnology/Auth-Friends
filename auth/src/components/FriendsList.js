import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component{
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get()
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <button onClick={this.getData}>TEST</button>
            </div>
        )
    }
}

export default FriendsList;