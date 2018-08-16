import React from 'react';
import { connect } from 'react-redux';
import FriendsList from '../components/FriendsList';
import { getFriends , addFriends } from '../actions/actions';
import AddNewFriends from './AddNewFriend';

class FriendsListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }
    handleChanges = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    submit = () => {
        this.props.addFriends(this.state.name, this.state.age, this.state.email)
        window.location.reload();
        this.setState({name:'',age:'',email:''})
    }
    componentDidMount() {
        this.props.getFriends();
      }
    render(){
        return(
            <div>
                <FriendsList 
                    friends={this.props.friends}/>
                <AddNewFriends 
                    name={this.state.name}
                    age={this.state.age}
                    email={this.state.email}
                    handleChange={this.handleChanges}
                    submitAdd={this.submit}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return(
        {friends: state.friends}
    )
}

export default connect(mapStateToProps, { getFriends, addFriends })(FriendsListContainer);