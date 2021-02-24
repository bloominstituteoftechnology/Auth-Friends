import axios from 'axios'

export const changeHandler = e=>{
    this.setState({login: {
        ...this.state.login, 
        [e.target.name]: e.target.value,
    },
    error: '',
  })
}

export const initialState = {
    login: {
      username: "",
      password: "",
    },
    error: "",
  };

export const submitLogin = e=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.login)
      .then(res=>{
          console.log('login res: ', res);
          localStorage.setItem('token', JSON.stringify(res.data.payload))
          this.props.history.push('/friends');
          this.setState(initialState)
      }).catch(err=>{
          console.log(err)
          this.setState({error: err.response.data.error})
      })
}