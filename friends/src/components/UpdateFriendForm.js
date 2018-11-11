import React from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../actions';

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: null,
            email: '',
        }
    }

    componentDidMount() {
        const { friends, match } = this.props
        const friend = friends.find( item => item.id === Number(match.params.id))
        this.setState(friend)
    }

    inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.updateFriend(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' placedholder='Enter Name Here' value={this.state.name} onChange={this.inputHandler} />
                <input type='text' name='email' placedholder='Enter Email Here' value={this.state.email} onChange={this.inputHandler} />
                <input type='number' name='age' placedholder='Enter Age Here' value={this.state.age} onChange={this.inputHandler} />
                <button type='sumbit'> Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { updateFriend })(UpdateFriend);