import React, { Component } from 'react'
import {connect} from 'react-redux'
import {savingFriend} from '../actions'

const resetState = {
    name: '',
    age: '',
    email: '',
    
    
}

class SavedFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
        savedName: ''
    }
    handeInput = event => {
        this.setState({
            [event.target.name]: event.target.value
           
        }) 
        console.log(this.state)
    }

    render(){
        return(
            <form>
                {this.props.savingFriends ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/> :
                <div>
                    <h2>SAVE FRIENDS</h2>
                <input name={'name'} value = {this.state.name} onChange = {this.handeInput}/>
                <input name={'age'} value = {this.state.age} onChange = {this.handeInput}/>
                <input name={'email'} value = {this.state.email} onChange = {this.handeInput}/>
                <button type="button"onClick={()=> {this.props.savingFriend(this.state),this.setState({savedName:this.state.name}),this.setState(resetState)}}>Save</button>
                <br/>     
                {this.props.friendsSaved && <h6>{this.state.savedName} Saved to friends list</h6>}
                </div>
                          
                
                }
                
            </form>
            
        )
    }
}

const mapStateToProps = state => {
    console.log(state.savingFriends)
    return{

        savingFriends: state.savingFriends,
        friendsSaved: state.friendsSaved,
    }
}

export default connect(mapStateToProps, {savingFriend})(SavedFriendForm)