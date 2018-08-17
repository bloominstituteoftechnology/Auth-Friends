import React from 'react' 
import Friend from './Friend';

class Friends extends React.Component {

    handleDelete = event => {
        this.props.deleteFriend(event.target.id)
    }

    handleUpdate = event => {
        console.log(event)
    }
    
    render() {
        return (<div>
            {this.props.friendsFetched 
                ? this.props.friends.map(friend => <Friend key={friend.id} {...friend} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>)
                : <h1>Loading</h1>}
        </div>)
    } 
}

export default Friends