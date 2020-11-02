import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth} from '../axiosWithAuth';

class FriendsList extends React.Component{
    constructor(){
        super();
        this.state={
            friends:[],
            friend:{
                name:'',
                age:'',
                email:''
            }
        }
    }

    componentDidMount(){
        this.getFriends();
    }

    getFriends=()=>{
        axiosWithAuth()
        .get('/friends')
        .then((res)=>this.setState({...this.state,friends:res.data}))
        .catch((err)=>console.log(err))
    }

    addFriend=(e)=>{
        e.preventDefault();
        axiosWithAuth()
        .post('/friends',this.state.friend)
        .then(res=>this.setState({...this.state, friends:res.data}))
        .catch(err=>console.log(err))
    }

    deleteFriend=(e,id)=>{
        e.preventDefault();
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res=>this.setState({...this.state,friends:res.data}))
        .catch(err=>console.log(err))
    }

    handleChange=(e)=>{
        this.setState({
            friend:{
                ...this.state.friend,
                [e.target.name]:e.target.value
            }
        })
    }

    render(){
        return(
<div>    
    <form onSubmit={this.addFriend}>
        <input type='text' name='name' placeholder='' value={this.state.friend.name} onChange={this.handleChange}/>
        <input type='text' name='age' placeholder='' value={this.state.friend.age} onChange={this.handleChange}/>
        <input type='text' name='email' placeholder='' value={this.state.friend.email} onChange={this.handleChange}/>
        <button>Add Friend</button>  
    </form>
    {this.state.friends.map(friend=>
    <div key={friend.id}>
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <Link to={`/protected/friends/${friend.id}`}><button >Edit Friend</button></Link>
        <button onClick={(e)=>this.deleteFriend(e,friend.id)}>Delete Friend</button>
    </div>)}

    
</div>
        )
    }
}

export default FriendsList
    
