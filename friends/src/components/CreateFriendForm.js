import React from "react";

 class FriendForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      age:"",
      email:""
    }
  }


  inputChange(event) {
    const loc = event.target.name
    const val = event.target.value
    const newState = this.state;
    newState[loc] = val
    this.setState(
      newState
    )

  }

  onSubmit(event) {
    this.props.addFriend(this.state)
  }

  render() {
    return (
      <div className="newFriend">
        <label>
          <strong>Name: </strong><input type="text" name="name" onChange={this.inputChange.bind(this)} />
        </label>
        <label>
        <strong>Age: </strong><input type="number" name="age" onChange={this.inputChange.bind(this)} />
        </label>
        <label>
        <strong>E-mail: </strong><input type="email" name="email" onChange={this.inputChange.bind(this)} />
        </label>
        <button onClick={this.onSubmit.bind(this)}>Add</button>
      </div>
    )
  }
}

export default FriendForm