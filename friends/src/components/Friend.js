import React from 'react';



import './components.css';

class Friend extends React.Component{

    deleteFriendHandler = () =>{
        this.props.deleteFriend(this.props.id)
    }

    render(){
        return(
            <div className="friend">
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.email}</p>
                <p style={{cursor: 'pointer'}} onClick={this.deleteFriendHandler}>Delete Friend</p>
            </div>
        )
    }
};

export default Friend;