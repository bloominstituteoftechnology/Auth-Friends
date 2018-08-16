import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "./action";

import Form from './Form'

class App extends Component {
  state = {
    addFriendName: ''
  }

  componentDidMount() {
    return this.props.fetchData()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addFriend = (e) => {
    e.preventDefault();
    console.log('hello');
    this.setState({addFriendName: ''})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <Form
            onChange={this.onChange}
            addFriend={this.addFriend}
            addFriendName={this.state.addFriendName}
            deleteFriend={this.deleteFriend}
            editFriend={this.editFriend}
          />
        </section>
        <main>
          {this.props.isFetching ? <img src={logo} className="App-logo" alt="logo" /> :
            this.props.friendsList.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    friendsList: state.friends
  }
}

export default connect(mapStateToProps, { fetchData })(App);
