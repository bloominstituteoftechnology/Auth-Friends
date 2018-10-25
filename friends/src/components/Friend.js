import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="friend-info-card">
            <h2>{this.props.friend.name}</h2>
            <h4>{this.props.friend.age}</h4>
            <h4>{this.props.friend.email}</h4>
            </div>
        )
    }
}

export default Friend;