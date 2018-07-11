import React from 'react';
import UpdateFriendForm from './UpdateFriendForm';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleEdit: false
        }
    }

    deleteFriend = () => {

    }

    render() {
        return (
            <div className='friend-container'>

                <button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })} >Edit</button>
                <button onClick={() => this.props.deleteFriend(this.props.friend.id)} >Delete</button>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.email}</p>
                <p>{this.props.friend.age}</p>

                {
                    this.state.toggleEdit ? <UpdateFriendForm
                        name={this.props.friend.name}
                        email={this.props.friend.email}
                        age={this.props.friend.age}
                        id={this.props.friend.id} /> : null
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStateToProps, { deleteFriend })(Friend);