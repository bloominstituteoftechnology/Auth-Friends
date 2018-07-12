import React from 'react';
import EditFriend from './EditFriend';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    }
  }

  toggleEditForm = () => {
    this.setState({showEditForm: !this.state.showEditForm})
  }

  render() {
  return (
    <div>
      <div key={this.props.friend.id}>
      <h4>{this.props.friend.name}</h4>
      <h4>{this.props.friend.age}</h4>
      <h4>{this.props.friend.email}</h4>
      </div>
      {this.state.showEditForm ? <EditFriend handleUpdate={this.props.handleUpdate} friendID={this.props.friend.id} />: null}
      <button type="button" onClick={this.toggleEditForm}>Edit Friend</button>
      <button type="button" onClick={() => this.props.handleDelete(this.props.friend.id)}>Delete Friend</button>
    </div>
  )
}
}

export default Friend;
