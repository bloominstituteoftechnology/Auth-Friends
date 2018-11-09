import React, { Component } from 'react';

class Friend extends Component {
    constructor(props)   {
        super(props)
    }

    render()    {
        console.log(this.props);
        return(
            <div>
                <div>{this.props.friend.name}</div>
                <div onClick={()    =>  this.props.removeFriend(this.props.friend.id)}>X</div>
            </div>
        )
    }
}

export default Friend;
