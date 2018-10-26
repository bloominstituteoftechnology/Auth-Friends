import React from 'react'; 
import styled from 'styled-components';
import { editFriend } from '../Actions/index'
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

class Edit extends React.Component{
    constructor(props){
        super(props)
        this.formSubmit = this.formSubmit.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.state={
            Id:this.props.id,
            Name:this.props.friend.name,
            Age:this.props.friend.age,
            Email:this.props.friend.email,
        }
    }
    handleFieldChange(event){
        this.setState({[event.target.id]:event.target.value})
    }
    formSubmit(event){
        event.preventDefault();
        this.props.editFriend(this.state.Id,
                                            {
                                                name:this.state.Name,
                                                age:this.state.Age,
                                                email:this.state.Email
                                            }
        );
        this.setState({
                Id:'',
                Name:'',
                Age:'',
                Email:''
            })
        this.props.history.push('/')
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <P>Name</P><Input id='Name' onChange={this.handleFieldChange} placeholder='Name' value ={this.state.Name}></Input>
                <P>Age</P><Input id='Age' onChange={this.handleFieldChange} placeholder='Age' value ={this.state.Age}></Input>
                <P>Email</P><Input id='Email' onChange={this.handleFieldChange} placeholder='Email' value={this.state.Email}></Input>
                <button>save</button>
            </form>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
         id:ownProps.match.params.id,
         friend:state.friendsReducer.friends.find(friend => ownProps.match.params.id == friend.id) || null
    };
  };

  export default connect(mapStateToProps,{ editFriend })(Edit);
  
