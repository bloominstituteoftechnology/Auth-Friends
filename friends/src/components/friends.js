import React from 'react';
import {connect} from 'react-redux'; 

import CreateFriendForm from './createfriendform';
import { deleteFriend } from '../actions';
import UpdateFriendForm from './updatefriendform';

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
                        <span onClick={() => this.props.deleteFriend(friend.id)}> x: </span>
                            {friend.name}
                        <button onClick ={ () =>this.update(friend) } >EDIT</button>
                    </div> 
                )}
        { this.state.edit ? (<UpdateFriendForm update={this.update} friend={this.state.friend} />) : ( <CreateFriendForm /> )  } 
            </div>
        )
    }
};

const maSptateToProps = state => {
    return state;
}

export default connect(maSptateToProps, {deleteFriend})(Friends);