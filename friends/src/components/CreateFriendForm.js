import React, { Component } from 'react';

class CreateFriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
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
          const newFriend = {...this.state, age: parseInt(this.state.age)}
          ev.preventDefault();
          this.props.addFriend(newFriend);
          this.setState({
            name: '',
            age: '',
            email: ''
          })
      }
  
    render() {
      console.log(this.props.friends)
      return (
        
         <form onSubmit={this.submitHandler}>
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
        
      );
    }
  }
  
export default CreateFriendForm;