import React from 'react';

class AddFriend extends React.Component {
    state = {
        id: Date.now(),
        name: '',
        age: '',
        email: '',
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    };

    addFriend = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api", this.state.credentials)
          .then(res => {
            console.log(res);
            localStorage.setItem("authToken", res.data.payload);
            this.props.history.push("/protected");
          })
          .catch(err => console.log(err));
    };

    render(){
        return(
            <form onSubmit={this.addFriend}>

                <label>Name:</label>
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <label>Age:</label>
                <input
                    type='text'
                    name='age'
                    value={this.state.age}
                    onChange={this.handleChange}
                />

                <label>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <button>Submit</button>

            </form>
        )
    }
}