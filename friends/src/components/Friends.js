import React, { Component } from 'react';
import Friend from './Friend.js'
import Form from './Form.js'

class Friends extends Component {
    constructor()   {
        super();
    }

    render()    {
        return(
            <div>
                {this.props.friends.map((friend)    =>  {
                    return <Friend removeFriend={this.props.removeFriend} friend={friend}/>
                })}
                <Form addFriend={this.props.addFriend} />
            </div>
        )
    }
}

export default Friends;
