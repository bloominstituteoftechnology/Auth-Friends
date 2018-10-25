import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="friend-info-card">
            <h2>{this.props.friend.name}</h2>
            </div>
        )
    }
}

export default Friend;