import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {friendFetcher, friendUpdater, friendDeleter} from '../actions';
import FriendList from '../components/FriendsList';
import InputForm from '../components/InputForm';

class FriendsContainer extends Component {
    constructor(){
        super();
        this.state={
            name: '', 
            age: null,
            email: '',
        }
    }

componentDidMount () {
    this.props.actions(); 
}

inputChangeHandler = (e) => {
   this.setState({[e.target.name]: e.target.value})
}

onSubmitAddHandler = (e) => {
    e.preventDefault(); 
    this.props.friendUpdater(this.state)
}

friendDeleter = (e) => {
    e.preventDefault(); 
    this.props.friends.map(friend => {
        if(friend.name === this.state.name){
            return this.props.friendDeleter(friend.id)
        } else return null;
    });
}

    render(){
        console.log(this.state)
        return(
            <div>
                <FriendList 
                    friends={this.props.friends} 
                />
                <InputForm
                    newFriend={this.state.newfriend}
                    onSubmitAddHandler={this.onSubmitAddHandler}
                    inputChangeHandler={this.inputChangeHandler}
                    friendDeleter={this.friendDeleter}
                />
            </div>
        )
    }
}

const mapStatetoProps = state =>({
    friends: state.friends
});

export default connect(mapStatetoProps, {
    actions: friendFetcher, friendUpdater, friendDeleter
    })(FriendsContainer);



