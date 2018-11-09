import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {fetchFriends} from '../actions/actions';
import FriendCard from './FriendCard';

const FriendsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;

    ul{
        display: flex;
        flex-direction: column;
    }
`;

const LoadingMessage = styled.div`
    font-size: 2.2rem;
`;

class FriendsList extends React.Component{

    componentDidMount(){
        this.props.fetchFriends();
    }

    render(){
        const {friends, fetching} = this.props
        return(
            <FriendsContainer>
                {
                    fetching ?
                    <LoadingMessage>Loading Friend Data...</LoadingMessage> :
                    <ul>
                        {friends.map(friend=><FriendCard key={friend.id} friend={friend}/>)}
                    </ul>
                }
            </FriendsContainer>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        friends: state.friends,
        fetching: state.fetching
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList);