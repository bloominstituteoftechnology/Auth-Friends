import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import Friends from './components/Friends';
import LoadingFriends from './components/LoadingFriends';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

class App extends Component {
  componentDidMount() {
    const URL = 'http://localhost:5000/api/friends';
    this.props.fetchData(URL);
  }
  render() {
    return (
      <React.Fragment>
        <AddFriendForm />
        {this.props.fetching ? <LoadingFriends /> : null}

        {this.props.fetched ? <Friends friends={this.props.friends} /> : null}

        {this.props.error ? (
          <div style={{ color: 'red', fontSize: '30px', padding: '20px' }}>
            {this.props.error}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
    fetched: state.friendsFetched,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(App);
