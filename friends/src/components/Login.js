import React from "react";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      ...this.state.credentials,
      [e.target.name]: e.target.value,
    });
  };

  login = e => {
      e.preventDefault();

      axios.post('http:localhost:5020/api/login', this.state.credentials)
      .then(res => {
          localStorage.setItem('token', res.data.payload);
          this.props.history.push('/friends')
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
