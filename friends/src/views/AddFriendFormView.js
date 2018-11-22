import React from 'react';
import {addFriend} from '../actions/index.js';
import {connect} from "react-redux";
import AddFriendForm from '../components/AddFriendForm.js'

class AddFriendFormView extends React.Component{
    constructor(props){
        super();
        this.state={
            name:'',
            age:'',
            email:'',
        }
    }
    changeHandlerName=(e)=>{
        this.setState(
            { name : e.target.value}
        );
        }
        changeHandlerAge=(e)=>{
            this.setState(
                {age:e.target.value}
            )
        }

        changeHandlerEmail=(e)=>{
            this.setState(
                {email:e.target.value}
            )
        }
  

    

submitHandler=(e)=>{
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState(
        {name:'',
        age:'',
    email:''}
    )
    
}

render(){
    return(
        <AddFriendForm changeHandlerEmail={this.changeHandlerEmail} changeHandlerAge={this.changeHandlerAge}name={this.state.name} age={this.state.age} email={this.state.email}changeHandlerName={this.changeHandlerName} submitHandler={this.submitHandler}/>
    )
}

}

const mapStateToProps=state=>{
    return{

    }
}

export default connect(
    mapStateToProps,{addFriend})(AddFriendFormView);