import React from 'react';
import { connect } from "react-redux";
import UpdateForm from '../components/UpdateForm';
import { editAction , delAction, saveAction } from '../actions';

class Friend extends React.Component{
    render() {
        // console.log(this.props);
        let friend = this.props.values;
        if (this.props.isUpdating){
            return (
                <div className="Friend">
                    <div className="info">
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                    <UpdateForm />
                </div>
            )
        } else {
            return (
                <div className="Friend">
                    <div className="info">
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                    <button onClick={this.props.editAction}>edit</button>
                    <button /*onClick={}*/>delete</button>
                </div>
            )
        }    
    }
    
}

const mapStateToProps = state => {
    // console.log(state);
    return ({
        isUpdating: state.editReducer.updatingFriend
    })    
}

export default connect(
    mapStateToProps,
    { editAction, delAction, saveAction } 
  )(Friend);

