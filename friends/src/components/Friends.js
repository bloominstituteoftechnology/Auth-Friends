import React from 'react';
import {connect } from 'react-redux';

export default class Friends extends React.Component {
    state = {

    }

    render(){
        return (
            <div className="friendContainer">
            {
               this.props.friends.map(friend =>
                {
                    return (
                        <div className={`friendCard ${this.props.delete ? 'delete' : ''}`}
                             onClick={this.props.delete ? ()=> this.props.deleteFriend(friend.id) : null}>{friend.name}</div>
                    )
                }
                ) 
            }
            </div>
        )
    }
}