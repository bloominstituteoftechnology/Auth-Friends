import React from 'react';
import { connect } from "react-redux";
import { saveAction } from '../actions';


class UpdateForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
          name: "",
          age: 0,
          email: ""
        }
    }
    handleTodoInput = e => {
        e.preventDefault();
        this.setState({ [e.target.placeholder]: e.target.value });
      };
    render() {
        console.log(this.state);
        return (
            <form onSubmit={()=>this.props.saveAction(this.state)}>
                <input onChange={this.handleTodoInput}type="text" placeholder="name" />
                <input onChange={this.handleTodoInput}type="text" placeholder="age" />
                <input onChange={this.handleTodoInput}type="text" placeholder="email" />
                <button>Save</button>
            </form>
        )
    }
}
const mapStateToProps= state=> {
    // console.log(state);
    return ({
        isSaved: state.saveReducer.friendsSaved
    })
}
export default connect(
    mapStateToProps,
    { saveAction } 
  )(UpdateForm);