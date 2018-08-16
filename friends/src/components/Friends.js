import React from 'react' 
import Friend from './Friend';

class Friends extends React.Component {
    
    render() {
        return (<div>
            {this.props.friendsFetched 
                ? this.props.friends.map(friend => <Friend key={friend.id} {...friend} />)
                : <h1>Loading</h1>}
        </div>)
    } 
}

export default Friends