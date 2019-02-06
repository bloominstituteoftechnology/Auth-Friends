import React from 'react';
import { connect } from 'react-redux';

// import { addTodo } from './actions';
// import { clearCompleted } from './actions';

class UpdateFriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    }
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();

    this.props.addTodo(this.state.inputText)
    this.setState({ inputText: "" })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.inputText)
        this.setState({ inputText: "" })
        }}>
        <input type="text" placeholder="Add Task" value={this.state.inputText} onChange={this.changeHandler}></input>
        <button type="submit" >Add Task</button>
        <button type = "button" onClick={() => {this.props.clearCompleted()}}>Clear Completed</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: {
      value: state.value,
      completed: state.completed
    }
  }
}


export default connect(mapStateToProps, { addTodo: addTodo, clearCompleted: clearCompleted })(UpdateFriendsForm);