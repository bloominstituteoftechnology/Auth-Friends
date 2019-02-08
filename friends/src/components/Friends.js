import React from "react";
import { connect } from 'react-redux';
import  { fetchFriends } from '../Actions';

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchFriends()
    }

    render(){
        return(
            <div>
                {this.props.friends.map(friend => {
                    return <div>{friend.name}</div>
                })}
            </div>
        );
    }
}

const mstp = state => {
    return {
        friends: state.friendReducer.friends,
        loading: state.friendReducer.loading
    }
}

export default connect(
    mstp, { fetchFriends }
)(Friends);