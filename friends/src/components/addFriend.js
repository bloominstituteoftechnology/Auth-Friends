import React from 'react'
import axiosWithAuth from '../axios/index';


class AddFriend extends React.Component {
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

handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/friends', this.state)
        .then(response => {
            console.log(response)
            // this.props.history.push('/friends')
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
            <form onSubmit={this.handleSubmit}>
               
                <input 
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleChange}
                placeholder='name'/>
               
                <input 
                name='age'
                type='number'
                value={this.state.age}
                onChange={this.handleChange}
                placeholder='age'/>
             
                <input 
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='email'/>
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}
}

export default AddFriend;