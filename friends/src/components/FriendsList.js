import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {

        state = {
            friends: []
        }

        componentDidMount() {
            this.getData()
        }

    getData = () => {
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

 render() {

        return(

            <div>
                <button onClick={this.getData}>Find More Friends</button>

                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                    <p><strong>{friend.name}</strong> is {friend.age} years old.</p>
                    <p>If you want to know more weirdly personal information about {friend.name}, you can contact them at {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList