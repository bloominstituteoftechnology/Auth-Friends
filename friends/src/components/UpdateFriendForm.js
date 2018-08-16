import React from 'react';
import {updateFriendInfo} from '../actions';
import {connect} from 'react-redux';
class UpdateFriendForm extends React.Component{
    constructor() {
        super();
        this.state={
            id:'',
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
        const id=this.state.id;
        const updatedFriendInfo={
            name: this.state.name||undefined,
            age:this.state.age||undefined,
            email:this.state.email||undefined,
            ccNumber:this.state.ccNumber||undefined
        }
        this.setState({name:'',age:'',email:'',ccNumber:'',id:''});
        this.props.updateFriendInfo(updatedFriendInfo,id);
    }
    render() {
        return (
        <form className='updateFriendForm'>
        <input type='number' placeholder='Enter id' name='id' value={this.state.id} onChange={this.handleInputChange}/>
        <input type='text' placeholder='Enter name' name='name' value={this.state.name} onChange={this.handleInputChange}/>
        <input type='number' placeholder='Enter age' name='age' value={this.state.age} onChange={this.handleInputChange}/>
        <input type='email' placeholder='Enter email' name='email' value={this.state.email} onChange={this.handleInputChange}/>
        <input type='number' placeholder='Enter credit card number' name='ccNumber' value={this.state.ccNumber} onChange={this.handleInputChange}/>
        <button type='submit' onClick={this.makeFriendObj} className='btn waves-effect waves-light'>Update Friend Info</button>
        </form>
        )
    }
}
const mapStateToProps=()=>{
    return {}
}
export default connect(mapStateToProps,{updateFriendInfo})(UpdateFriendForm);
