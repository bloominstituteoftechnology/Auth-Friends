import React from "react";
// import Loader from 'react-loader-spinner';


//axioswithauth
import { axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials:{
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res =>  {
            window.localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendsList');
            console.log('this is here',res.data.payload)
        })
        .catch(err => console.log('this is an error', err));
    }
    
    render(){
  return (
    <div>
        {/* {this.props.fetchingData }
        <div>
        <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p> 
        </div> */}
      <form onSubmit={this.login}>
          <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          />
          <input 
          type='text'
          name='password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
          />
          <button>Login in</button>
      </form>
    </div>
  );
    }
};
export default Login;
