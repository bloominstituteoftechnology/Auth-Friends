import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from '../components/friends';
import FriendForm from '../components/form';
import { fetchData } from '../actions/actions';

class FriendViewer extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

  render() {
    if(this.props.loading) {
        return(
            <h1>Loading...</h1>
        )
    }
    return (
      <div className="viewer">
        <Friends friends={this.props.friends}/>
        <FriendForm />
      </div>
    );
  }
}

const mstp = state => {
    console.log("viewer state:", state)
    return {
        friends: state.friends,
        loading: state.loading
    }
}

export default connect(mstp, { fetchData } )(FriendViewer);