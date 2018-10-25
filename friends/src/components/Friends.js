import React from 'react';
import {connect } from 'react-redux';

export default class Friends extends React.Component {
    state = {

    }

    render(){
        return (
            <div>
            {
               this.props.friends.map(friend =>
                {
                    return (
                        <div>{friend.name}</div>
                    )
                }
                ) 
            }
            </div>
        )
    }
}