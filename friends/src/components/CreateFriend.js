import React from 'react';
import axios from 'axios';

class CreateFriend extends React.Component {
    state = {
        info: {
            name: '',
            age: '',
            email: '',
        }
    };

    handleChange = (e) => {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: e.target.value
            }
        });
    };

// second post request
   friend = e => {
        e.preventDefault();

        axios.post('api/friends'), this.state.info)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/friends');
        })
        .catch((err) => {
            console.log(err);
        });
        return 
    };

//friend form

    render() {
    return(
        <div>
        <form>
        <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <input
        type="text"
        name="age"
        value={this.state.age}
        onChange={this.handleChange}
        />
        <input
        type="text"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        />
        <button>Submit New Friend</button>
        </form>
        </div>
    )
}
}
export default CreateFriend;