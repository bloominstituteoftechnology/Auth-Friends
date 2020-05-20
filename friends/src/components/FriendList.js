import {axiosWithAuth} from '../utilities/axiosWithAuth';
import React from 'react';

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

    getFriends = () =>{
        axiosWithAuth().get('/api/friends')
        .then(res => {console.log('friendList', res);
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
                <>
                {this.friends.map(friend =>
                    <div key={friend.id}>
                        <h2>{`ID: ${friend.id}`}</h2>
                        <h2>{`${friend.name} ${friend.age}`}</h2>
                    </div>)}
                </>
            </div>
        )
    }
}

export default FriendList;
