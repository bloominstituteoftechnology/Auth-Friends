import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Friends, CreateFriendForm, UpdateFriendForm } from '../components';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    return null;
  }

  render() {
    return (
      <div>
        <Friends />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(App);
