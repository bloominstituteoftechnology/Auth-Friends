import React from 'react';
import {connect} from 'react-redux';

import DisplayFriend from './DisplayFriend'
import UpdateFriend from './UpdateFriend';
import {deleteFriend} from '../actions/actions';

class FriendCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            update: false
        }
    }

    componentDidMount(){
        this.setState({
            update: false
        })
    }

    handleUpdate = (event)=>{
        event.preventDefault();
        this.setState({
            update: true
        })
    }

    handleDelete = (event)=>{
        event.preventDefault();
        this.props.deleteFriend(this.props.friend);
    }

    render(){
        return(
            <li>
                <DisplayFriend friend={this.props.friend}/>
                {
                    this.state.update ? 
                    <UpdateFriend friend={this.props.friend}/> :
                    <div>
                        <div onClick={this.handleUpdate}>Update</div>
                        <div onClick={this.handleDelete}>Delete</div>
                    </div>
                }
            </li>
        )
    }

}

const mapStateToProps = (state)=>{
    return {}
}

export default connect(mapStateToProps, {deleteFriend})(FriendCard);