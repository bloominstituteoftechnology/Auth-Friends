import React, { Component } from 'react';
import Friends from './components/Friends';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions/CreateFriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        {this.props.fetching ? (
          <Friends friends={friends} />
        ) : null}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getFriends })(App);
