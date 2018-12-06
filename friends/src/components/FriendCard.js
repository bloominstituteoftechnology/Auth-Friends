import React from 'react';
import EditForm from './EditForm';

class FriendCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            willEdit: false,
        }
    }

    openEditForm = () => {
        this.setState({
            willEdit: !this.state.willEdit,
        })
    }

    render(){
        return (
            <div key={this.props.friend.id}>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>
                <button onClick={this.openEditForm}>
                    {this.state.willEdit ? 'Close' : 'Edit'}
                </button>
                <EditForm 
                    friendId={this.props.friend.id} 
                    friendData={this.props.friend}
                    willEdit={this.state.willEdit}
                />
            </div>
        );
    }
}

export default FriendCard;