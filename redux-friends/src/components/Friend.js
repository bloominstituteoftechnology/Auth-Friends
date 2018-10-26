import React, { Component } from 'react';
import Card from '../styles/Card';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: this.props.friend.name,
        age: this.props.friend.age,
        email: this.props.friend.email,
        id: this.props.friend.id
      },
      edit: false
    };
  }

  handleEdit = () => {
    this.setState({ edit: true });
  };

  handleInputChange = e => {
    this.setState({
      friend: { ...this.state.friend, [e.target.name]: e.target.value }
    });
  };

  handleFriendUpdates = () => {
    const { handleUpdatingFriend } = this.props;
    handleUpdatingFriend(this.state.friend);
    this.setState({ edit: false });
  };

  render() {
    const { name, age, email, id } = this.state.friend;
    const { edit } = this.state;

    return (
      <Card className="card" key={id} id={id}>
        {edit ? (
          <React.Fragment>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              value={age}
              name="age"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              value={email}
              name="email"
              onChange={this.handleInputChange}
            />

            <div onClick={console.log('handleDeleteClick')} className="delete">
              X
            </div>
            <button onClick={this.handleFriendUpdates} className="btn">
              Update
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>email: {email}</p>
            <div onClick={console.log('handleDeleteClick')} className="delete">
              X
            </div>
            <button onClick={this.handleEdit} className="btn">
              Edit
            </button>
          </React.Fragment>
        )}
      </Card>
    );
  }
}

export default Friend;
