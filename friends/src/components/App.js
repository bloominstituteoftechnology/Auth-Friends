import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import Friends from './Friends';
import { getFriends } from '../actions/Actions';


class App extends Component {
    componentDidMount() {
        this.props.getFriends();
    }
  render() {
        const friends = this.props;
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
       friends : state.friends,

    };
};

export default connect(mapStateToProps, { getFriends })(App);
