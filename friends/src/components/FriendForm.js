import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

  class FriendForm extends React.Component {
      constructor(props){
          super(props)
          this.state = {
              name:'',
              age:'',
              email:''
          }
      }
  
      addFriend = e => {
          e.preventDefault();
          this.props.addFriend(this.state)
          this.setState({

            name: '',
            age: '',
            email: ''
          })
        }

      handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    
      }

      render() {
          return (

            <div>
                <form autoComplete="off" onSubmit={this.addFriend} >

                <input 
                    name='name'
                    type='text'
                    value={this.state.name}
                    placeholder='Name'
                    onChange={this.handleChanges}
                />

                <input 
                    name='age'
                    type='text'
                    value={this.state.age}
                    placeholder='Age'
                    onChange={this.handleChanges}
                />

                <input 
                    name='email'
                    type='text'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleChanges}
                />

            
                <button type='submit'>Add a Friend</button>    
                
                </form>   
            </div>
        

          )
        }

    }

    const mapStateToProps = state => {
        return {
            addFriend: state.addFriend
        }
    }

    export default connect(
        mapStateToProps,
        {addFriend} 
    )(FriendForm)

    