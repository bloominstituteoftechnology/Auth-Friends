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
        <header>
        {this.props.fetching ? (
         <button>Cool</button>
        ) : null}
        </header>
        <Friends friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { getFriends })(App);
