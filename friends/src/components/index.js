import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor } from '../actions';
import Friends from './friends.js';
import Front from './front.js';
import AddFriend from './addfriend.js';
import { Button } from 'reactstrap';
import './app.css';

class App extends Component {

  componentDidMount() {
    this.props.fetcher('http://localhost:5000/api/friends');
  }

  render() {
    switch (this.props.appState) {
      case "fetching":
        return (
          <div className="App mb-5">
              <Front />
          </div>
        );
      case "fetched":
        return (
          <div className="App mb-5">
            <Friends friendData={this.props.friends} deleteButton={this.props.deleter} editButton={this.props.beginEdit} addButton={this.props.beginAdd} />
          </div>
        );
      case "add":
        return (
          <div className="App mb-5">
            <AddFriend nameText="" ageText="" emailText="" headerText="Add a friend" cancelButton={this.props.cancelAdd} submitButton={this.props.adder} />
          </div>
        );
      case "edit":
        return (
          <div className="App mb-5">
            <AddFriend friendID={this.props.friends[this.props.editIndex].id} nameText={this.props.friends[this.props.editIndex].name} ageText={this.props.friends[this.props.editIndex].age} emailText={this.props.friends[this.props.editIndex].email} headerText={"Edit " + this.props.friends[this.props.editIndex].name} cancelButton={this.props.cancelEdit} submitButton={this.props.editor}/>
          </div>
        );
      case "error":
        return (
          <div className="App mb-5">
            {this.props.error.message}
            <Button onClick={() => this.props.fetcher('http://localhost:5000/api/friends')} >Reload</Button>
          </div>
        );
      default:
        return (
          <div />
        )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    appState: state.appState,
    error: state.error,
    editIndex: state.editIndex
  }
}

export default connect(mapStateToProps, {
  fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor
})(App);
