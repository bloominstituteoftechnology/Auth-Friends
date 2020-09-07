import React from 'react';
import axios from 'axios';


class friendCard extends React.Component {

// state = {
//     friends: []
// };

// componentDidMount() {
//     this.getData();
// }

// getData = () => {
//     axios 
//     .get('http://localhost:5000')
//     .then(res => console.log('here is getData', res))
//     .catch(err => console.log('here is getData err', err))
// }

// handleChange = (e) => {
//     this.setState({
//         friends: {
//             ...this.state.friends,
//             [e.target.name]: e.target.value
//         }
//     });
// };

// submit = (e) => {
//     e.preventDefault();
//     axios
//         .post('http//localhost:5000/api/login', this.state.friends)
//         .then((res) => {
//             localStorage.setItem('token', res.data.payload);
//             this.props.history.push('/protected');
//         })
//         .catch((err) => console.log(err));
// };

render(){
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            placeholder="Name"
                            value={this.handleChange}
                        />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                        <input
                            name="age"
                            placeholder="age"
                            value={this.handleChange}
                        />
                </div>

                <div>
                    <label htmlFor="email" >Email</label>
                        <input 
                            name="email" 
                            placeholder="Email"
                            value={this.handleChange}  
                        />
                </div>
                <button>Submit</button>
            </form>
        </div>
        );
    };
};

export default friendCard;
