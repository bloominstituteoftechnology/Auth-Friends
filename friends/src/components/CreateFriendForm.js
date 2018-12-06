import React, { Component } from 'react';

class CreateFriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        }
    }

    componentDidMount(){
      
    }

    changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      submitHandler = ev => {
          ev.preventDefault();
          this.props.addItem(this.state);
      }
  
    render() {
      console.log(this.props.friends)
      return (
        <div className="form" onSubmit={this.submitHandler}>
         <form>
            <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
          />
            <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <input
            onChange={this.changeHandler}
            type="email"
            name="email"
            value={this.state.email}
            placeholder="email"
          />
          <button>Add Friend</button>
             
         </form>
        </div>
      );
    }
  }
  
export default CreateFriendForm;