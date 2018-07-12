import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friends extends Component{
    render() {
    return(
        <ul>
            {this.props.friends.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
    )
};
}

const mapStateToProps = state => {
    console.log(state);
    return{
    friends: state.friendsReducer.friends
 } 
};

export default connect(mapStateToProps) (Friends);