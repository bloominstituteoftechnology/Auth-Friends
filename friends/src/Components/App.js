import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFriend, deleteFriend, updateFriend, saveFriend } from '../Actions/actions';
import FriendList from './Display';
import FriendEdit from './EditForm'

// import '../styles/App.css';
// pull in actions from action/index
const inpStyle = {
	width: '30%',
	marginLeft: '33%',
	// marginRight: '20px',
	marginTop: '20px',
	marginBottom: '20px',
	padding: '12px 20px',
	// margin: '8px 0',
	color: 'blue',
	fontWeight: 'bold',
	fontSize: '15px',
	// boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center'
};
const mbtn = {
	cursor: 'pointer',
	padding: 8,
	color: 'blue',
	fontWeight: 'bold',
	backgroundColor: 'aqua',
	fontSize: 15,
	marginLeft: '33%',

};
const mainSt = {
	// display: 'flex',
	// justifyContent: 'center',
	// width: '100%'
	marginLeft: '33%',
	width: '100%'
}
const headSt = {
	marginLeft: '33%',
	color: 'blue',
	// border: '2px solid yellow',
	width: '30%',
	textAlign: 'center'
}
const fstyle = {
	border: '2px solid black',
	listStyleType: 'none',
	width: '30%',
	// marginLeft: '33%'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			Name: '',
			Email: '',
			Age: ''
		};
	}
	componentDidMount() {
		this.props.fetchFriend();	
		this.setState({ lists: this.props.friends });
	}
	getAJAX = () => {
		this.props.fetchFriend();
	};

	handleTextInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	saveNoteData = () => {
		const list = { name: this.state.Name, email: this.state.Email, age: this.state.Age };
		this.props.saveFriend(list);
		this.setState({ Name: '', Email: '', Age: '' });
	};
	render() {
		return (
			<div className="App" >				
				<h3 style={headSt}>Add Another Friend To the List</h3>
				<input
					type="text"
					style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="First Name		Last Name"
					name="Name"
					value={this.state.Name}
				/>
				<input
					type="text"
					style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="Age"
					name="Age"
					value={this.state.Age}
				/>
				<input
					type="text"
					style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="Email"
					name="Email"
					value={this.state.Email}
				/>
				<div>
					<button onClick={this.saveNoteData} style={mbtn}>
						Add Friend
					</button>
					<h6>{this.state.lists}</h6>
				</div>				
				<h1 style={headSt} >Friend List</h1>
				{this.props.friends.map((friend, i) => (
					<div style={mainSt}>
					<ul style={fstyle}>
						<FriendList
							key={friend.id}
							friend={friend}
							saveNoteData={this.saveNoteData}
							updateFriend={this.props.updateFriend}
							deleteFriend={this.props.deleteFriend}
							getAJAX={this.getAJAX}
						/>
						<FriendEdit
							key={friend + i}
							friend={friend}
							updateFriend={this.props.saveFriend}
							deleteFriend={this.props.deleteFriend}
							getAJAX={this.getAJAX}
						/>
						</ul>
					</div>
				))}
				
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
		friends: state.friends,
		fetchingFriends: state.fetchingFriends,
		friendsFetched: state.friendsFetched,
		friendsSaved: state.friendsSaved,
		savingFriends: state.savingFriends,
		updatingFriend: state.updatingFriend,
		friendUpdated: state.friendUpdated,
		deletingFriend: state.deletingFriend,
		friendDeleted: state.friendDeleted
	};
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, { fetchFriend, deleteFriend, updateFriend, saveFriend })(App);
