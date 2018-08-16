import React from 'react';



class FriendsContainer extends React.Component {


    render () {
        return (
            <div>
                {this.props.friends.map(friend => <div onClick = {() => this.props.onClick(friend.id, friend.name, friend.age, friend.email)}key = {friend.id} >{friend.name}     <span>{friend.age  }     </span>
                <span>{friend.email}     </span><i className="fas fa-backspace" onClick = {() => this.props.delete(friend.id, friend.name, friend.email)}></i></div> )}
            </div>
        )
    }
}


export default FriendsContainer; 