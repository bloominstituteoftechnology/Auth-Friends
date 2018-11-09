import React from "react";
import {connect} from "react-redux";
import {createFriend} from "../Actions/actions"

class CreateForm extends React.Component {
   constructor(){
      super()
      this.state = {
         name: "",
         age: null,
         email: "",
      }
   }

   inputHandler = (e) =>{
      e.preventDefault()
      this.setState({[e.target.name]: e.target.value})
   }

   submitHandler = (e) => {
      e.preventDefault()
      this.props.createFriend(this.state)
   }
   render(){
      return(
         <form onSubmit={this.submitHandler}>
            <input 
               name="name" 
               placeholder="Enter Name"
               onChange={this.inputHandler}></input>
            <input 
               name="age" 
               placeholder="Enter Age"
               onChange={this.inputHandler}></input>
            <input 
               name="email"
               placeholder="Enter Email"
               onChange={this.inputHandler}></input>
            <button type="submit">Create Friend</button>
         </form>
      )
   }
}

const mapState = state => {return {}}

export default connect(mapState, {createFriend})(CreateForm)