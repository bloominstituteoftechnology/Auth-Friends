import React from 'react' 

class FriendForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    inputChange(event) {
        const loc = event.target.name
        const val = event.target.value
        const newState = this.state;
        newState[loc] = val
        this.setState(
            newState
        )
           
    }

    onSubmit(event){
        // Do something pass 
        // this.props.
        console.log(this.state)
        this.props.addFriend(this.state)
    }

    render(){
        return (
            <div className="newFriend">
                <label>
                    Name <input type="text" name="name" onChange={this.inputChange.bind(this)}/>
                </label>
                <label>
                    Age <input type="number" name="age" onChange={this.inputChange.bind(this)}/>
                </label>
                <label>
                    email <input type="email" name="email" onChange={this.inputChange.bind(this)}/>
                </label>
                <button onClick={this.onSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default FriendForm