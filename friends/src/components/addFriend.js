import React, {Component} from 'react'

class AddFriend extends Component {
    constructor() {
        super()
        this.state = {
            active: false,
            render: (<h1>nope</h1>),
            name: '',
            age: '',
            email: '',
        }
    }
    componentDidMount = () => this.setState({render: this.inactive()})
    h_toggle_render = () => {
        this.setState(prevState => {
            const render = prevState.active ? this.inactive() : this.active()
            return {
                active: !prevState.active,
                render: render,
            }
        })
    }
    h_add_friend = () => {
        const friend = {
            name: this.state.name,
            age: parseInt(this.state.age),
            email: this.state.email,
        }
        this.props.add(friend)
        this.h_toggle_render()
    }
    h_update_friend = e => this.setState({[e.target.name]: e.target.value})
    active = () =>
        (
            <div className='friend'>
                <pre>#0</pre>
                <input type='text' onChange={this.h_update_friend} name='name' placeholder='name'/>
                <button onClick={this.h_add_friend}>Add</button>
                <input type='number' onChange={this.h_update_friend} name='age' placeholder='age'/>
                <input type='text' onChange={this.h_update_friend} name='email' placeholder='email'/>
                <button onClick={this.h_toggle_render}>Back</button>
            </div>
        )
    inactive = () =>
        (
            <div className='add friend' onClick={this.h_toggle_render}>
                <h2>Add Friend</h2>
            </div>
        )
    render = () => this.state.render

}

export default AddFriend