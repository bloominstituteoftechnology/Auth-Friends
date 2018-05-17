import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd } from '../actions';
import Friends from './friends.js';
import Front from './front.js';
import AddFriend from './addfriend.js';
import './app.css';

class App extends Component {

  componentDidMount() {
    this.props.fetcher('http://localhost:5000/api/friends');
  }

  render() {
    if (this.props.fetching) return (
      <div className="App mb-5">
          <Front />
      </div>
    );
    else if (this.props.add) return (
      <div className="App mb-5">
        <AddFriend cancelButton={this.props.cancelAdd}/>
      </div>
    );
    else if (this.props.fetched) return (
      <div className="App mb-5">
        <Friends friendData={this.props.friends} addButton={this.props.beginAdd} />
      </div>
    );
    else return (
      <div />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error,
    add: state.add,
    edit: state.edit
  }
}

export default connect(mapStateToProps, {
  fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd
})(App);
