import React from 'react';
import {addFriend} from '../actions';
import {connect} from 'react-redux';
class CreateFriendForm extends React.Component {
    constructor() {
        super();
        this.state={
            name:'',
            age:'',
            email:'',
            ccNumber:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    makeFriendObj=()=>{
        const newFriendObj={
            name: this.state.name,
            age:this.state.age,
            email:this.state.email,
            ccNumber:this.state.ccNumber
        }
        this.setState({name:'',age:'',email:'',ccNumber:''});
        this.props.addFriend(newFriendObj);
    }
    render() {
        return(
        <form className='createFriendForm'>
        <input type='text' placeholder='Enter name' name='name' value={this.state.name} onChange={this.handleInputChange}/>
        <input type='number' placeholder='Enter age' name='age' value={this.state.age} onChange={this.handleInputChange}/>
        <input type='email' placeholder='Enter email' name='email' value={this.state.email} onChange={this.handleInputChange}/>
        <input type='number' placeholder='Enter credit card number' name='ccNumber' value={this.state.ccNumber} onChange={this.handleInputChange}/>
        <button type='submit' onClick={this.makeFriendObj} className='btn waves-effect waves-light'>Submit New Friend Info</button>
        </form>
        )
    }
}
const mapStateToProps=()=>{
    return {}
}
export default connect(mapStateToProps,{addFriend})(CreateFriendForm);