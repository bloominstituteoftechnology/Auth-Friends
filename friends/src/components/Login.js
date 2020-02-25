import React from "react";

//axioswithauth
import {axioswithauth} from '../utils/axiosWithAuth';

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
    
    render(){
  return (
    <div>
      <p>Login page</p>
    </div>
  );
    }
};
export default Login;
