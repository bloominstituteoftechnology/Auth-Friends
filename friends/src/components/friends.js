import React from 'react';
import {connect} from 'react-redux'; 
import { deleteFriend } from '../actions';
//import updatefriendform from './updatefriendform';

class Friends extends React.Component {
   
    handleEdit= id => {

    }
    render() {
        return(
            <div className="Friends">
                {this.props.friends.map(friend => 
                    <div className="Friends__Friend" key={friend.id}>
                        <span onClick={()=> this.props.deleteFriend(friend.id)}> x :: </span>
                        {friend.name}
                        <button onClick={()=>this.handleEdit(friend.id)}>Edit</button> 

                    </div>
                )}
            </div>
        );
    }
};

const maSptateToProps = state => {
    return state;
}

export default connect(maSptateToProps, {deleteFriend})(Friends);