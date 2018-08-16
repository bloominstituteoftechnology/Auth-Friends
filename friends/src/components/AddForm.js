import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {addFriend} from '../actions/actions';


const Form = styled.div`

    display: flex;
    max-width: 525px;
    width: 100%;
    height: 300px;
    border: 1px solid gray;
    border-radius: 40px;
    flex-direction: column;
    margin: 20px auto;
    background-color: rgba(255, 255,255, 0.8);
    align-items: center;
    justify-content: center;    
`
const Name = styled.div`

    > input {
        padding-left: 5px;
        margin-bottom: 5px;
    }

`
const Age = styled.div`
    
    > input {
        padding-left: 5px;
        margin-bottom: 5px;
    }

`

const Email = styled.div`
    
    > input {
        padding-left: 5px;
        margin-bottom: 5px;
    }

`


class AddForm extends Component {
   constructor(){
       super();
       this.state = {
           name: '',
           age: '',
           email: ''
       }
   }

   handleChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value
    });
}

  handleAddFriend = (event) => {
    event.preventDefault();

        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
            this.props.addFriend(friend);
            this.setState ({
                name: '',
                age: '',
                email: ''
            })
}    

render() {
return(
    <Form>
    <h1>Add new friend</h1>
        <Name>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />            
        </Name>
        <Age>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
        </Age>
        <Email>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
        </Email>

        <button type="submit" onClick={this.handleAddFriend}>Add new friend</button>
    </Form>
    
);
}
}
 
export default connect (null, {addFriend})(AddForm);