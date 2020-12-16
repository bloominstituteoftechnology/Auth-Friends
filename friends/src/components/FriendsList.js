import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Loader from 'react-loader-spinner'
import AddFriend from './AddFriend'
import Friends from './Friends'

class FriendsList extends React.Component {

state = {
    friends: []
}

    componentDidMount() {
        this.getFriend()
    }

    getFriend = () => {
            axiosWithAuth()
            .get(`api/friends`)
            .then(res => {
                this.setState({
                friends: res.data
                })
            })
            .catch(err => {
                console.log('ERRROR: ', err)
            })
        }
    
    handleSubmit = friend => {
        this.setState({friend})
    }

render() {

        return(

            <div>
                {this.state.friends.length ? ''
                : <Loader type="Puff" color="#000000" height="60" width="60"/>}
                {this.state.friends.map(friend => {
                    return(
                        <Friends key={friend.id} friend={friend}/>
                    )
                })}
                <AddFriend onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default FriendsList