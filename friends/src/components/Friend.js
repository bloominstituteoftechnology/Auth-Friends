import React from 'react';
import styled from 'styled-components';

const FriendNode = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    border: 1px solid #222;
    margin-bottom: 50px;
    padding: 15px;

    form {
        display: flex;
        flex-direction: column;
    }

    .delete-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

        &:active {
            transform: translateY(1px);
        }
    }
`;

class Friend extends React.Component {
    state = {
        editing: false,
        name: this.props.data.name,
        age: this.props.data.age,
        email: this.props.data.email,
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleUpdate = e => {
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
        }
        this.props.updateFriend(newFriend, this.props.data.id);
        this.setState({ editing: false });
    }
    render(){
        return (
            <FriendNode>
            {this.state.editing
                ? (
                    <>
                        <form onSubmit={this.handleUpdate}>
                            <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            />
                            <input
                            type="number"
                            placeholder="Age"
                            name="age"
                            onChange={this.handleChange}
                            value={this.state.age}
                            />
                            <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                            <button type="submit">Update Friend</button>
                        </form>
                        <button onClick={() => this.setState({ editing: false })}>BACK</button>
                    </>
                ) : (
                    <>
                        <span>{this.props.data.name}</span>
                        <span>{this.props.data.age}</span>
                        <span>{this.props.data.email}</span>
                        <span className="fas fa-user-minus delete-btn" onClick={() => this.props.deleteFriend(this.props.data.id)}></span>
                        <button onClick={() => this.setState({ editing: true })}>EDIT</button>
                    </>
                )}
            </FriendNode>
        );
    }
}

export default Friend;