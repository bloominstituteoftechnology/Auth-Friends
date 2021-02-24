import React, { Component } from 'react'
import { axiosAuth } from '../utils/axiosAuth'

export class Friends extends Component {
    state = {friends: []}
    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosAuth().get('/api/friends')
        .then(res=>{
            console.log(res);
            this.setState({friends: res.data})
        }).catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                {
                    this.state.friends.length === 0
                    ? <h3>Finding Friends</h3>
                    : this.state.friends.map(friend => {
                        return <div className='friendDiv' id='friend.id'>
                            <h3>{friend.name}</h3>
                            <p>{`age: ${friend.age}`}</p>
                            <p>{`email: ${friend.email}`}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Friends



