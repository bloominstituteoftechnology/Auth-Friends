import React from 'react';
import {connect} from 'react-redux';
import { addNewFriend } from './../actions';
import Styled from 'styled-components';

const FormContainer = Styled.div`
    display: flex;
    width: 70%;
    align-items: center;


`;

const Formbox = Styled.form`
display: flex;
width: 100%;
padding: 10px;
`;

const InputField = Styled.input`
    width: 80%;
    margin: 5px;
`;

const SubmitButton = Styled.button `
    width: 15%;
    height: 30px;

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
            <h4>Add a new friend</h4>
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