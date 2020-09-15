import React from 'react';

class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return(
      <div>
        <form onSubmit={() => console.log("foo")}>
          <input 
            style={{"margin" : "10px"}}
            type="text"
            name="username"
            value={"foo"}
            onChange={this.handleChange}
          />

          <input 
            style={{"margin" : "10px"}}
            type="text"
            name="password"
            value={"foo"}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {/* <p style={{ color: "red" }}>{this.state.error}</p> */}
      </div>
    )
  }
}

export default Login;