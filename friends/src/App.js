import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFriends, toggleSelected, deleteFriend } from './actions';
import FriendsList from './components/FriendsList';
import { GlobalStyle, H1, AppContainer } from './styles';

class App extends Component {
	componentDidMount() {
		this.props.requestFriends();
	}

	toggleSelected = (index) => {
		this.props.toggleSelected(index);
  };
  
  deleteFriend = (id) => {
    this.props.deleteFriend(id);
  }

	render() {
		if (this.props.requesting === true) {
			return <H1> Data is being fetched...</H1>;
		}
		return (
			<React.Fragment>
				<GlobalStyle />
				<AppContainer>
					<H1>Current Friends</H1>
					<FriendsList
						friends={this.props.friends}
            toggleSelected={this.toggleSelected}
            deleteFriend={this.deleteFriend}
					/>
				</AppContainer>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => (
	{
		friends: state.friends,
		requesting: state.requesting
	}
);

export default connect(
	mapStateToProps,
	{
		requestFriends,
    toggleSelected,
    deleteFriend
	}
)(App);
