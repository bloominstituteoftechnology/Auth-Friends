import React, { Component } from 'react';
import UpdateFriend from "./UpdateFriend";
import { connect } from 'react-redux';
import { deleteFriend, fetchFriends } from "../actions";

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            friend: props.friend
        }
    }

    componentDidMount() {
        this.setState({showForm: this.props.updated});
    }

    handleDelete = () => {
        this.props.deleteFriend(this.state.friend);
        this.props.fetchFriends();
    }
    
    render() { 
        return (
            <div className="friend-container">
                <h1>{this.state.friend.name}</h1>
                <span>Age: {this.state.friend.age}</span>
                <span>email: {this.state.friend.email}</span>
                {this.state.showForm ? (
                    <React.Fragment>
                        <UpdateFriend friend={this.state.friend}/>
                        <button 
                            className="btn cancel"
                            onClick={() => {this.setState({showForm: false})}}>
                            Cancel
                        </button>
                    </React.Fragment>
                ) : (
                    <div className="buttons">
                        <button 
                            className="btn update"
                            onClick={() => {this.setState({showForm: true})}}>
                            Update
                        </button>
                        <button 
                            className="btn delete"
                            onClick={this.handleDelete}>
                            Delete
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        updated: state.updated
    };
}

export default connect(mapStateToProps, { deleteFriend, fetchFriends })(Friend);