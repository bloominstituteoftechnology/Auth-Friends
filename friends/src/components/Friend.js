import React from 'react';
import {connect} from 'react-redux';
import {deleteFriend} from "../actions";

class Friend extends React.Component {
    
fireDelete =event =>{
    event.preventDefault();
this.props.deleteFriend(this.props.friend.id);
}

    render(){
        return (
            <div className="friend-card">
            <div className="delete" onClick={this.fireDelete}>X</div>
            <h3>{this.props.friend.name}</h3>
            <h3>Age: {this.props.friend.age}</h3>
            <h3>{this.props.friend.email}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        deleting: state.friendsReducer.deleting
    }
}

export default connect(
    mapStateToProps,
    {deleteFriend}
)(Friend);