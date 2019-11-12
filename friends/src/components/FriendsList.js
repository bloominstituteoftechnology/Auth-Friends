import React from "react";
import axios from "axios"
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
    constructor(){
        state = {
            friendsList:[]
        }
    }

    componentDidMount(){
        this.getFriends();
        if (!sessionStorage.getItem("token")){
            console.error("Please Login");
        } else {
            console.info("We are logged in");
        }
    }

    getFriends = () =>{
        axios.get('',{ 
            headers:{authorization: sessionStorage.getItem("token")}
        })
        .then(response=>{
            this.setState({ friendsList: response.data });
        })
    }


    render(){
        
        return(
            <div className ="friendsList">
                <h1>Friend's List</h1>
                {friendsList.map((item)=>(
                    <FriendCard key={item.key} {...item}/>   
                ))}
            </div>
        )
    }
}

export default FriendsList;