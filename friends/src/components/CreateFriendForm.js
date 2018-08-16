import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../store/actions'

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    postFriend = () => {
        this.props.addFriend(this.state.name, this.state.age, this.state.email);
    }

    render() {
        return (
            <div>
                <h1>Add your new friend!</h1>
                <form onSubmit={this.postFriend}>
                    <input type="text" name="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name}/>
                    <input type="number" name="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age}/>
                    <input type="email" name="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addFriend })(CreateFriendForm);