import React, { Component } from 'react';
import './Friends.css';
import Friendupdate from './Friendupdate';

import { connect } from 'react-redux';
import { deleteFriend } from '../Actions';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }

  updateToggle = () => {
    const active = this.state.update;
    this.setState({ update: !active });
  };

  deleteFriend = event => {
    event.preventDefault();
    const deleteIndex = {
      data: {
        index: this.props.index,
      },
    };
    this.props.deleteFriend(deleteIndex);
  };

  render() {
    return (
      <div className="Friends">
        <div className="Friend-box">
          <div className="Name">{this.props.friend.name}</div>
          <div className="Age">Age:{this.props.friend.age}</div>
          <div className="Email">Email: {this.props.friend.email}</div>
          <button className="Update" onClick={this.updateToggle}>Update</button>
          <button className="Delete" onClick={this.deleteFriend}>Delete</button>
          {this.state.update ? (
            <Friendupdate data={this.props.friend} index={this.props.index} />
          ) : null}
        </div> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { deleteFriend })(Friends);
