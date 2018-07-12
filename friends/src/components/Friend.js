import React from 'react';
import UpdateFriendForm from './UpdateFriendForm';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleEdit: false,
            toggleName: false
        }
    }

    componentDidMount() {
        this.props.onRef(this, false);
    }

    componentWillUnmount() {
        this.props.onRef(this, true)
    }

    setEdit = () => {
        this.setState({ toggleEdit: false });
    }

    openCloseAll = value => {
        if (value === false) {
            this.setState({ toggleName: value, toggleEdit: false })
        }
        this.setState({ toggleName: value });
    }

    render() {
        return (
            <div className='friend-container'>
                <p className='friend-name' onClick={() => this.setState({ toggleName: !this.state.toggleName, toggleEdit: false })}>{this.props.friend.name}</p>
                {
                    this.state.toggleName ?
                        <React.Fragment>
                            <div className='friend-info' >
                                <p><strong>Email:</strong> {this.props.friend.email}</p>
                                <p><strong>Age:</strong> {this.props.friend.age}</p>
                                <p><strong>Food:</strong> {this.props.friend.food}</p>
                            </div>
                            <Button className='edit-button' color='info' onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })}>Edit</Button>
                            <Button className='delete-button' color='danger' onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</Button>
                        </React.Fragment> : null
                }
                {
                    this.state.toggleEdit ? <UpdateFriendForm
                        setEdit={this.setEdit}
                        name={this.props.friend.name}
                        email={this.props.friend.email}
                        age={this.props.friend.age}
                        food={this.props.friend.food}
                        id={this.props.friend.id} /> : null
                }
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        friendName: state.friendsReducer.friendName
    }
}

export default connect(mapStateToProps, { deleteFriend })(Friend);