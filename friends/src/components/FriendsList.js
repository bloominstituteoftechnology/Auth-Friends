import React from "react";
import axios from "axios"
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
     state = {
        friendsList:[],
        newName:'',
        newAge:'',
        newEmail:''
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
        axios.get('http://localhost:5000/api/friends',{ 
            headers:{authorization: sessionStorage.getItem("token")}
        })
        .then(response=>{
            this.setState({ friendsList: response.data });
        })
    }

     onNameChange = (e) =>{
        this.setState({newName:e.target.value});
    }

     onAgeChange = (e) =>{
        this.setState({newAge:e.target.value});
    }
    onEmailChange = (e) =>{
        this.setState({newEmail:e.target.value});
    }

     onSubmit = (e) =>{
        e.preventDefault();
        const newFriend = {name:this.state.newName, age: this.state.newAge, email:this.state.newEmail}
        this.setState({newName:'',newAge:'',newEmail:''});
        axios.post('http://localhost:5000/api/friends', newFriend, { 
            headers:{authorization: sessionStorage.getItem("token")}
        })
            .then((response)=>{
                console.log(response)
                this.setState({friendsList: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

     deleteFriend = (friendId) =>{
        axios.delete(`http://localhost:5000/api/friends/${friendId}`,  { 
            headers:{authorization: sessionStorage.getItem("token")}
        })
            .then((response)=>{
                console.log(response)
                this.setState({friendsList: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    editFriend = (friendId, editedFriend) =>{
        axios.put(`http://localhost:5000/api/friends/${friendId}`, editedFriend,  { 
            headers:{authorization: sessionStorage.getItem("token")}
        })
            .then((response)=>{
                console.log(response)
                this.setState({friendsList: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    render(){
        
        return(
            <div className ="friendsList">
                <form>
                    <label>
                        <p>Name:</p>
                        <input name="name" value={this.state.newName} onChange={this.onNameChange}/>
                    </label>
                    <label>
                        <p>Age:</p>
                        <input name="age" value={this.state.newAge} onChange={this.onAgeChange}/>
                    </label>
                    <label>
                        <p>Email:</p>
                        <input name="email" value={this.state.newEmail} onChange={this.onEmailChange}/>
                    </label>
                    <button onClick={this.onSubmit}>Add Friend</button>
                </form>
                <h1>Friend's List</h1>
                {this.state.friendsList.map((item)=>(
                    <FriendCard key={item.id} {...item} deleteFriend={this.deleteFriend} onSubmit={this.editFriend}/>   
                ))}
            </div>
        )
    }
}

export default FriendsList;