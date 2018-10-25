import React from 'react'
import {connect} from 'react-redux'
import FriendsForm from '../components/FriendsForm'
import {addNewFriend} from '../actions'

class FriendsFormContainer extends React.Component {
    constructor() {
        super()
        this.state = {
           friend: {
            name: '',
            age: '',
            email: ''
           }
        }
    }

    handleChange = event => {
        this.setState({
            friend: {
            ...this.state.friend,
            [event.target.name]: event.target.value
        },
        })
    }

    handleAddNewFriend = event => {
        event.preventDefault();
        console.log('firing')
        this.props.addNewFriend(this.state.friend);
    }

render() {
    return (
        <div>
        <FriendsForm friendInfo={this.state} handleChange={this.handleChange} handleAddNewFriend={this.handleAddNewFriend}/>
        </div>
    )
}
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {addNewFriend})(FriendsFormContainer);