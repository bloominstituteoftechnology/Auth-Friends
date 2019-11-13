import React from 'react'
import axiosWithAuth from '../axios/index';


class addFriend extends React.Component {
state = [{
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}]

handleChange = e => {
    let value = e.target.value
    if(e.target.name === 'age') {
        value = Number(value)
    }
    this.setState({
        ...this.state, [e.target.name]: value
    })
}

addFriend = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/friends', this.state)
        .then(response => {
            console.log(response)
            this.props.history.push('/friends')
        })
        .catch(error => console.log(error.response))

    this.setState({
        ...this.state,
        name: '',
        age: '',
        email: ''
    })

}

render() {
    return (
        <div>
            <form onSubmit={this.addFriend}>
                Name
                <input 
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleChange}/>
                Age
                <input 
                name='age'
                type='number'
                value={this.state.age}
                onChange={this.handleChange}/>
                Email
                <input 
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.handleChange}/>
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}
}

export default addFriend;