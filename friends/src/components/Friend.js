import React, { Component } from 'react';
import UpdateFriend from "./UpdateFriend";
import { connect } from 'react-redux';
import { deleteFriend } from "../actions";

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
    
    render() { 
        return (
            <div className="friend-container">
                <h1>{this.state.friend.name}</h1>
                <span>{this.state.friend.age}</span>
                <span>{this.state.friend.email}</span>
                {this.state.showForm ? (
                    <React.Fragment>
                        <UpdateFriend friend={this.state.friend}/>
                    </React.Fragment>
                ) : (
                    <div className="buttons">
                        <button 
                            className="btn update"
                            onClick={() => {this.setState({showForm: true})}}>
                            Update
                        </button>
                        <button 
                            className="btn delete">
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
        deleting: state.deleting,
        deleted: state.deleted,
        error: state.error,
        updated: state.updated
    };
}

export default connect(mapStateToProps, { deleteFriend })(Friend);