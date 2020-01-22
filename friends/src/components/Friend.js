import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData, addFriend } from '../actions/actions';

class Friend extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    };

    componentDidMount() {
        this.props.getData();
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.newFriend);
    };

    changeHandler = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <div>
                <h3>Add a New Friend</h3>
                    <form onSubmit={this.addFriend}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            onChange={this.changeHandler}
                            value={this.state.newFriend.name}
                        />
                        <input
                            type='text'
                            name='age'
                            placeholder='age'
                            onChange={this.changeHandler}
                            value={this.state.newFriend.age}
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            onChange={this.changeHandler}
                            value={this.state.newFriend.email}
                        />
                        <button type='submit' onClick={this.addFriend}>Add Friend!</button>
                    </form>

                    <div>
                        <h1>Hi Friends</h1>
                        {this.props.friends.map(friend => {
                        return (
                                <div key={friend.id}>
                                    <h2>Name: {friend.name}</h2>
                                    <h2>Age: {friend.age}</h2>
                                    <h2>Email: {friend.email}</h2>
                                </div>
                            );
                        })};
                    </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error,
        fetchingData: state.fetchingData
    };
};

export default withRouter(
    connect(mapStateToProps, { getData, addFriend })(Friend));