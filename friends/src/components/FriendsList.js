import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList : []
    };


    componentDidMount() {
        this.getData();
      }
      
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log ("Data returned from the axios.get",res)
            this.setState({friendsList: res.data.map(item => {
                return(
                    item
                )
           
            })})
        })
        .catch(err => console.error(err));
    }
    render () {
        return (
            <div>
                <h2>You are in the friends list component</h2>
              {this.state.friendsList.map(friend => {
                  console.log("FriendsList jsx return after map",friend);
                  return(
                    <h3 key={friend.id}>{friend.name}</h3>
                  )
              })}  
            </div>
        )
    }
}
export default FriendsList;