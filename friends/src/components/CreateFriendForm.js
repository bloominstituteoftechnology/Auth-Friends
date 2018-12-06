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

    componentDidUpdate(prevprops, prevstate){
        let editFriend= this.props.editFriend;
        console.log(editFriend);
        if(!(prevprops.editFriend === editFriend)){
        if(editFriend.name){
            this.setState({
            name: editFriend.name,
            age: editFriend.age,
            email: editFriend.email
            })
            return;
        }
    }
    }

    changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      submitHandler = ev => {
          let newFriend = {...this.state, age: parseInt(this.state.age)}
          ev.preventDefault();
          if(!this.props.editFriend.name){
            this.props.addFriend(newFriend);
          }else{
              newFriend = {...newFriend, id: this.props.editFriend.id}
              this.props.updateToList(newFriend);
          }
          
          this.setState({
            name: '',
            age: '',
            email: ''
          })
      }
  
    render() {
      
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
          <button>{this.props.editFriend.name ? 'Edit Friend' : 'Add Friend'}</button>
             
         </form>
        
      );
    }
  }
  
export default CreateFriendForm;