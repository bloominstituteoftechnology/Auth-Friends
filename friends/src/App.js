import React, { Component } from 'react';
import { connect} from 'react-redux';
import FriendsList from './components/FriendsList';
import { getPageContentState } from './reducers/reducerIndex';
import * as actions from './actions/actions';
import AddFriendForm from './components/AddFriendForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }
  render() {

    const { pageContentState } = this.props;
    const mainPageContent = (
      pageContentState === 'addFriend' ?
      (<AddFriendForm />)
      : (<FriendsList />)
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        {mainPageContent}
        <button onClick={this.props.goToAddFriend}>Add Friend</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {pageContentState: getPageContentState(state)};
}
export default connect(mapStateToProps, actions)(App);
