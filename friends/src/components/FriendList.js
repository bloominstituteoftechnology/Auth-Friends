import {axiosWithAuth} from '../utilities/axiosWithAuth';
import React from 'react';
import AddFriend from '../components/AddFriend';

class FriendList extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: [], isLoading: false
            }
        }

        componentDidMount(){
            this.getFriends()
        }

        addingFriends = newState => {
            this.setState({friends: newState})
        }

    getFriends = () =>{
        axiosWithAuth().get('/api/friends')
        .then(res => {;
        this.setState({friends: res.data})
        this.setState({...this.state, isLoading: false});
    })
    .catch(err => {console.log(err);

        })
    }
    render(){
        return(
            <div className='friendList'>
                <h1>The Friends!</h1>
                <AddFriend addingFriends={this.addingFriends} />
                <div>
                {this.state.friends.map(friend =>
                    <div key={friend.id}>
                        <h2>{`ID: ${friend.id}`}</h2>
                        <h2>{`${friend.name} ${friend.age} ${friend.email}`}</h2>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default FriendList;
