import React, {Component} from 'react';

class AddForm extends Component {
   constructor(props){
       super(props);
       this.state = {
           name: '',
           age: '',
           email: '',
           update: false
       }
   }

   handleChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value
    });
}

  handleAddFriend = (event) => {
    event.preventDefault();

        const friend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
        };
            this.props.addFriend(friend);
            this.setState ({
                name: '',
                age: '',
                email: ''
            })
}    
    
 


render() {
return(
    <div>
    <h1>Add new friend</h1>
        <div>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </label>
            
        </div>
        <div>
        <label>
                Age:
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
            </label>
        </div>
        <div>
        <label>
                Email:
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            </label>
        </div>

        <button type="submit" onClick={this.handleAddFriend}>Add new friend</button>
    </div>
    
);
}
}
 
export default AddForm;