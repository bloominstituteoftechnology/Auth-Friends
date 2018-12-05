import React, { Component } from 'react';
import { connect } from 'react-redux';
import {requestFriends} from './actions'
import FriendsList from './components/FriendsList'
import { GlobalStyle, H1, AppContainer } from './styles';


class App extends Component {
  componentDidMount() {
    this.props.requestFriends();
  }

  render() {
    if (this.props.requesting === true) {
			return <H1> Data is being fetched...</H1>;
		}
    return(
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
        <H1>Current Friends</H1>
        <FriendsList friends={this.props.friends} />
        </AppContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends,
  requesting: state.requesting
});


export default connect(
  mapStateToProps,
  {
    requestFriends
  }
)(App);
