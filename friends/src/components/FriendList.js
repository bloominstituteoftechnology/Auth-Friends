import React from 'react';
import ReactDOM from 'react-dom';

import PostFriend from './PostFriend';
import PutFriend from './PutFriend';
import DeleteFriend from './DeleteFriend';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        friends: [],
        showForm: 'post'
    }
    
    componentDidMount() {
        this.getFriendData();
    }

    getFriendData = () => {
        const token = JSON.parse(localStorage.getItem("token"))
            axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => {
                console.log({err})
            })
    }

    postMessage = friend => {
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data,
            })
        })
        .catch((err) =>{
            console.log(err)
            this.setState({error: err.response.data.error})
            
        })
    }

    putMessage = (id, updateFriend) => {
        axiosWithAuth()
        .put(`/api/friends/${id}`, updateFriend)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteMessage = id => {
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then((res) => {
            console.log(res)
            this.setState({
                friends: res.data.id
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    changeTabs = tab => {
        this.setState({
          showForm: tab,

        });
      };

    
    render(){
    return(
        <div>
            <h2>These are my friends:</h2>
            <nav>
                <ul>
                    <li onClick={() => this.changeTabs('post')}
                    className={this.state.showForm === 'post' ? 'active' : null}>
                        Post
                    </li>
                    <li onClick={() => this.changeTabs('put')}
                    className={this.state.showForm === 'put' ? 'active' : null}>
                        Put
                    </li>
                    <li onClick={() => this.changeTabs('delete')}
                    className={this.state.showForm === 'delete' ? 'active' : null}>
                        Delete
                    </li>
                </ul>
                {this.state.showForm === 'post' && (
                <PostFriend 
                postMessage={this.postMessage}/> )}
                {this.state.showForm === 'put' && 
                <PutFriend 
                putMessage={this.putMessage} />}
                {this.state.showForm === 'delete' && <DeleteFriend deleteMessage={this.deleteMessage}/>}
            </nav>
        </div>
    )
    }
}

export default FriendList;