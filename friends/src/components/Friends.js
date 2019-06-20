import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getData, addNewFriend } from '../actions'

class Friends extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        this.props.getData();
    }

    addFriend = event => {
        event.preventDefault();
        this.props.addNewFriend(this.state.newFriend)
        console.log(this.props.friends)
        console.log(this.state.newFriend)
        // this.setState( newFriend.name= '', newFriend.age= '', newFriend.email='' )
    }

    changeHandler = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value 
            }
        })
    }

    render () {
        // if (this.props.fetchingData) {
        //     <h2>Fetching friends list . . .</h2>
        //   }
        return (
            console.log(this.props.friends),
            <div className='friends-container'>
                <div className='friends-list'>
                    <h2>Friends list</h2>
                    {this.props.friends.map(friend => {
                        console.log(friend)
                    return (
                    <div className='friend-item' key={friend.id}>
                        <h1>{friend.name}</h1>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                    )
                    })}
            </div>
            <div className='friends-changes'>
                <form className='friend-form' onSumbit={this.addFriend}>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.newFriend.name}
                        onChange={this.changeHandler}
                        placeholder='name'
                        />
                    <input 
                        type='number'
                        name='age'
                        value={this.state.newFriend.age}
                        onChange={this.changeHandler}
                        placeholder='age'/>
                    <input 
                        type='email'
                        name='email'
                        value={this.state.newFriend.email}
                        onChange={this.changeHandler}
                        placeholder='email'/>
                        <button onClick={this.addFriend}>add friend</button>
                </form>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        error: state.error,
        fetchingData: state.fetchingData
    }
}



export default withRouter(connect(mapStateToProps, { getData, addNewFriend } )(Friends))