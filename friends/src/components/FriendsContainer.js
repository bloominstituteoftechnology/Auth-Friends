import React from 'react';



class FriendsContainer extends React.Component {


    render () {
        return (
            <div>
                {this.props.friends.map(friend => <div key = {friend.id} >{friend.name}     <span>{friend.age  }     </span>
                <span>{friend.email}     </span><i className="fas fa-backspace"></i></div> )}
            </div>
        )
    }
}


export default FriendsContainer; 