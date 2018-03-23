import React from 'react';
import { connect } from 'react-redux';



const Friends = state => {
   
    return state.friends.map((friend, i) => {
        return (
            <ul key={i}>
            <li>{friend.name}</li>
            <li>{friend.age}</li>
            <li>{friend.email}</li>
            </ul>
        );
    });
};

const mapStateToProps= state => {
    return state;
};
export default connect(mapStateToProps, {})(Friends);