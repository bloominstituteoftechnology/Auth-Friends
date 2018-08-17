import React from 'react' 

class FriendUpdateForm extends React.Component {
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
        this.props.updateFriend(this.state)
    }

    render(){
        return (
            <div>
                <h1>Update Friend</h1>
                <div className="newFriend">
                    <label>
                        Name <input type="text" name="name" onChange={this.inputChange.bind(this)} value={this.props.name}/>
                    </label>
                    <label>
                        Age <input type="number" name="age" onChange={this.inputChange.bind(this)} value={this.props.age}/>
                    </label>
                    <label>
                        email <input type="email" name="email" onChange={this.inputChange.bind(this)} value={this.props.email}/>
                    </label>
                    <button onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default FriendUpdateForm