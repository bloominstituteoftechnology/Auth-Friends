import React from 'react';
import {connect} from 'react-redux';
import { addNewFriend } from './../actions';
import Styled from 'styled-components';

const FormContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    margin: 20px;
    border: 1px solid black;
    padding: 20px;
`;

const Formbox = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 10px;
`;

const InputField = Styled.input`
    width: 80%;
    margin: 5px;
`;

const SubmitButton = Styled.button `
    width: 50%;
    height: 40px;
    background: #A18A61;
    border-radius: 10px;
    font-size: 16px;
`;

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        }
    }

    updateForm = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.name);
    }

    addFriend = (event) => {
        event.preventDefault();
        this.props.addNewFriend(
           { name: this.state.name,
            age: this.state.age,
            email: this.state.email}
        );
        console.log(this.state.name)
        this.setState({name: '', age: 0, email: ''})
    }

    render() {
    return (
        <FormContainer>
            <h2>Add a new friend</h2>
        <Formbox onChange={this.updateForm}>
            <InputField 
                type='text'
                name='name'
                placeholder='Name'
                defaultValue=''
            />
            <InputField 
                type='text'
                name='age'
                placeholder='Age'
                defaultValue=''
            />
            <InputField 
                type='text'
                name='email'
                placeholder='Email'
                defaultValue=''
            />
        </Formbox>
        <SubmitButton onClick={this.addFriend}>Submit</SubmitButton>
        </FormContainer>
    )
}
}

const mapStateToProps = state => {
    return {
      friends: state.friends.friends
    }
  }
  
  const mapActionsToProps = {
    addNewFriend: addNewFriend
  }

export default connect(mapStateToProps, mapActionsToProps)(AddFriend);