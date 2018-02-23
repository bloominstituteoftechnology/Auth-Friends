import React, { Component } from 'react';
import './Friends.css'
import UpdateFriend from './UpdateFriend'

import { connect } from 'react-redux';
import { deleteFriend } from '../Actions';

class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            update: false
        }
    }

    updateToggle = () => {
        const active = this.state.update;
        this.setState({update: !active});
    }

    deleteFriend = (event) => {
        event.preventDefault();
        const deleteIndex = {
            data: {
                index: this.props.index
            }
        }
        this.props.deleteFriend(deleteIndex);

    }

    render() {
        return (
            <div className="Friend">
                <div>
                        <div>{this.props.friend.name}</div>
                        <div>Age: {this.props.friend.age}</div>
                        <div>Email: {this.props.friend.email}</div>
                        <button onClick={this.updateToggle}>Update</button>
                        <button onClick={this.deleteFriend}>Delete</button>
                        {this.state.update ? <UpdateFriend data={this.props.friend} index={this.props.index}/> : null}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}
export default connect(mapStateToProps, { deleteFriend })(Friends);

