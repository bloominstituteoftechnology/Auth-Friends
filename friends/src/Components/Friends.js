import React from 'react';
import {connect} from 'react-redux'; 
import CreateFriends from './CreateFriends';
import { deleteFriend } from '../Actions/Index.js';
import UpdateFriends from './UpdateFriend';

class Friends extends React.Component {
    state = {
        edit: false,
        friend: {},
    };

    update = (friend) => {
        this.setState({
            edit: !this.state.edit,
            friend: friend,
        })
    }

    render() {
        return (
            <div className="Friends">
                {this.props.friends.map(friend => 
                    <div key={friend.id} className="Friends__Friend">
                        <button onClick={() => this.props.deleteFriend(friend.id)}> X </button><br />
                            {friend.name}<br />{friend.age}<br />{friend.email}
                        <button onClick ={ () =>this.update(friend) } >UPDATE</button>
                    </div> 
                )}
        { this.state.edit ? (<UpdateFriends update={this.update} friend={this.state.friend} />) : ( <CreateFriends /> )  } 
            </div>
        )
    }
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {deleteFriend})(Friends);