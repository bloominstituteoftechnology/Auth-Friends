import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getFriends} from '../actions/actions';

import AddForm from './AddForm';
import List from './List';


class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <List />
        <AddForm />
      </div>
    );
  }
}

export default connect (null, {getFriends})( App);
