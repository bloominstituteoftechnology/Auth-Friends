import React from 'react';
import UpdateFriendForm from './UpdateFriendForm';

class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleEdit: false,
            toggleName: false
        }
    }

    componentDidMount() {
        this.setState({ toggleName: this.props.friendName });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.friendname !== this.state.toggleName) {
            this.setState({ toggleName: nextProps.friendName });
        }
    }

    setEdit = () => {
        this.setState({ toggleEdit: false });
    }

    render() {
        console.log(this.state.toggleName);
        return (
            <div className='friend-container'>
                <p className='friend-name' onClick={() => this.setState({ toggleName: !this.state.toggleName })}>{this.props.friend.name}</p>
                {
                    this.state.toggleName ?
                        <React.Fragment>
                            <p>{this.props.friend.email}</p>
                            <p>{this.props.friend.age}</p>
                            <button onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })}>Edit</button>
                            <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</button>
                        </React.Fragment> : null

                }
                {
                    this.state.toggleEdit ? <UpdateFriendForm
                        setEdit={this.setEdit}
                        name={this.props.friend.name}
                        email={this.props.friend.email}
                        age={this.props.friend.age}
                        id={this.props.friend.id} /> : null
                }

            </div >
        );
    }
}

export default Friend;