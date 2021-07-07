import {axiosWithAuth} from '../axiosAuth'
import {useState} from 'react'
import {Redirect} from "react-router-dom"
import {useCompleteInput} from 'jacobhooksjacob'

export default function Login(){
    const username = useCompleteInput('Username');
    const password = useCompleteInput('Password');
    const [loggedIn, setLoggedIn] = useState(false);
    const handlesumbit = (e) =>{
        console.log('running')
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' }).then(response => {
            console.log(response.data);
            localStorage.setItem('token', response.data.payload);
            setLoggedIn(true);
    })}

    if(loggedIn){
        return <Redirect to="/list" />
    }
return(
    <form onSubmit={handlesumbit}>
        <h2>Log In</h2>
                
                {username.comp}
                {password.comp}
        <button type='submit'>Submit</button>
    </form>
)}