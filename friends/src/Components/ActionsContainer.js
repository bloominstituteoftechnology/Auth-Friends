import React from 'react'; 
import styled from 'styled-components';
import { addingFriend } from '../Actions/index'
import { connect } from "react-redux";

const Input = styled.input`
    width:300px;
    height:25px;
    font-size:1.6rem;
`
const P = styled.p`
    font-size:2.5rem;
    font-weight:bold;
`

class ActionsContainer extends React.Component{
    constructor(props){
        super(props)
        this.formSubmit = this.formSubmit.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.state={
            Name:'',
            Age:'',
            Email:''
        }
    }
    handleFieldChange(event){
        this.setState({[event.target.id]:event.target.value})
    }
    formSubmit(event){
        event.preventDefault();
        this.props.addingFriend(
            {
                name:this.state.Name,
                age:this.state.Age,
                email:this.state.Email
            }
        );
        this.setState({
                Name:'',
                Age:'',
                Email:''
            })
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <P>Name</P><Input id='Name' onChange={this.handleFieldChange} placeholder='Name' value ={this.state.Name}></Input>
                <P>Age</P><Input id='Age' onChange={this.handleFieldChange} placeholder='Age' value ={this.state.Age}></Input>
                <P>Email</P><Input id='Email' onChange={this.handleFieldChange} placeholder='Email' value={this.state.Email}></Input>
                <button>Submit Application!</button>
            </form>
        )
    }
}


  export default connect(null,{ addingFriend })(ActionsContainer);
  
