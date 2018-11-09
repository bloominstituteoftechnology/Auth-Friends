import React from "react";
import Friend from "./Friend"
import {connect} from "react-redux";
import {getFriends} from "../Actions/actions"

class FriendsList extends React.Component {
   componentDidMount() {
      this.props.getFriends()
   }
   render() {
		if(this.props.loading === true) {
			return <h2>Loading Friends...</h2>
		}
      return (
         <div>
				{this.props.friends.map(friend => {
						return (<Friend key={friend.id} friend={friend}/>)
				})}
         </div>
      )
   }
}

const mapState = state => {
	return {
		loading: state.loading,
		friends: state.friends,
	}
}

export default connect(mapState, {getFriends})(FriendsList)