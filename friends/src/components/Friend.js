import React from 'react';
import UpdateFriendForm from './UpdateFriendForm';

class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleEdit: false
        }
    }

    render() {
        return (
            <div className='friend-container'>

                <button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })} >Edit</button>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.email}</p>
                <p>{this.props.friend.age}</p>

                {
                    this.state.toggleEdit ? <UpdateFriendForm name={this.props.friend.name} email={this.props.friend.email} age={this.props.friend.age} /> : null
                }

            </div>
        );
    }
}

export default Friend;