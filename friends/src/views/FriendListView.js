import React from 'react';
import { connect } from 'react-redux';
import { FriendList } from '../components'
import { getFriends } from '../actions'

class FriendListView extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        console.log("CDM HAS BEEN INVOKED")
        this.props.getFriends();
    }

    render(){
        console.log("FRIEND LIST VIEW PROPS :",this.props)
        return(
            <div className="friend-list-div">
                <h1>Friends</h1>
                <FriendList friends={this.props.friends.friends} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("MAP STATE TO PROPS",state.friends);
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
    };
};

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendListView);
