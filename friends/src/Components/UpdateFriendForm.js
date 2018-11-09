import React from "react";

export default class UpdateForm extends React.Component {
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
      console.log(this.state)
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
         </form>
      )
   }
}