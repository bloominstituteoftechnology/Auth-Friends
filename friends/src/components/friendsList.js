import React, {Component} from 'react'
import {connect} from 'react-redux'
import Styled from 'styled-components'
import Friend from './friend'
import AddFriend from './addFriend'

import {getPicture, get_friend_all, kill_friend, add_friend} from '../actions'

class FriendsList extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount = () => {
        //get background image
        this.props.img !== {} && this.props.getPicture()
        //get friends
        this.props.get_friend_all()
    }
    h_add_friend = friend => {
        this.props.add_friend(friend)
        console.log(`${friend.name} was added`)
    }
    h_kill_friend = friend => {
        this.props.kill_friend(friend.id)
        console.log(`${friend.name} died`)
    }
    render = () => {
        return (
            <Wrapper img={this.props.img.url}>
                <div className='friends'>
                    {!this.props.fetchingFriends
                        && this.props.friends.map((friend, idx) =>
                            <Friend
                                info={friend}
                                key={idx}
                                kill={this.h_kill_friend}
                            />
                    )}
                    <AddFriend active={this.state.addFriendToggle} add={this.h_add_friend} />
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        img: state.pictureReducer.img,
        friends: state.friendsReducer.friends,
        fetchingFriends: state.friendsReducer.fetching,
    }
}

export default connect(
    mapStateToProps,{getPicture, get_friend_all, kill_friend, add_friend})(FriendsList)


const Wrapper = Styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #222;
    background-image: url('${props => props.img}');
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);
    color: #ccc;
    padding: 2rem;
    display: flex;
    justify-content: center;

    .friends {
        display: grid;
        grid-template-columns: auto;
        width: fit-content;
        height: fit-content;
        grid-gap: 1rem;
        font-size: 2rem;
    }

    .friend {
        background-color: rgba(0,0,0,.85);
        border-radius: 5px;
        width: 100%;
        padding: 2rem;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 100px auto 75px;
        cursor: pointer;
        &:hover {
            background-color: rgba(0,0,0,1);
        }
        &.add {
            h2 {
                grid-column: 1 / -1;
                text-align: center;
                text-transform: uppercase;
            }
        }
        button {
            width: 100%;
            justify-self: end;
            padding: 0.5rem;
            background: transparent;
            border: 1px solid #ccc;
            color: #ccc;
            cursor: pointer;
            border-radius: 2px;
            text-transform: uppercase;
            &:hover {
                background-color: #ccc;
                color: #222;
            }
        }
        input {
            background: transparent;
            color: #ccc;
            border: 0;
            border-bottom: 1px solid #ccc;
            font-size: 2rem;
        }
    }
`