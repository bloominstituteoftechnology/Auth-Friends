import React,{ useState } from "react"
import axios from "axios"

export default function Login () {

    const InitialFormState = {
        
    username: 'Lambda School'
    password: 'i<3Lambd4'
 }
  const [form,setForm] = useState(InitialFormState)
  const [isLoading,setIsLoading] = useState(true)

 const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', form)
      .then(res=>{
          console.log(res.data)
        localStorage.setItem('token', res.data.payload);
       this.props.history.push('/protected');
      })
      .catch(err=>{
        console.log(err);
      });

  }

  const handleChange = e => {
    setForm(
       {
        ...form,
        [ e.target.name ] : e.target.value
      }
    );
  };

        return (
     <div>
        <form onSubmit={login}>
            <label htmlFor="name">
                <input
                 name="name"
                 id = "name"
                value={form.username}
                type = "name"
                        />  
            </label>
            <label htmlfor = "password">
                 <input
                  name="password" 
                  id="name"
                  value={form.password}
                  type ="password"
                        />
            </label>
            <div>
                <button handleChange={handleChange}>Login</button>
            </div>
       </form>
    </div>

        )

}

