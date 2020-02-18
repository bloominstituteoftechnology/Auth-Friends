import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddNewFriendForm from './AddNewFriendForm';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        useEffect(()=>{
            axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log("Data returned from the axios.get", res)
                this.setState({
                    friendsList: res.data.map(item => {
                        return (
                            item
                        )
                    })
                })
            })
            .catch(err => console.error(err));
        }, [])
       
    }

    deleteFriend = (id) => {
        console.log("ytfygjhh");
        
        console.log("hgjghjghh", id);
        axiosWithAuth()
        .delete(`/api/friends/${id}`, this.state.friendsList)
        .then (res => { console.log("Data returned from axios.delete", res)
        this.setState({
            friendsList: res.data.filter(item =>  {
                console.log("item", item.id)
                return(
                    item.id !== id
                )
            })
          })
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
            <h2> You are in the friends list component </h2>
            <AddNewFriendForm/>
            {this.state.friendsList.map(friend => {
                   //console.log("FriendsList jsx return after map", friend);
                    return ( 
                       <div key = {friend.id}>
                        <h3 > {friend.name}, {friend.age}, {friend.id}  </h3>
                        <button onClick={() => {this.deleteFriend(friend.id)}}>Delete friend</button>
                       </div>
                    )
                })
            } </div>
        )
    }
}
export default FriendsList;