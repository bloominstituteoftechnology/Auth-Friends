import * as React from "react";
import "./Login.css";
import {CircularProgress} from "@material-ui/core";
import {useContext, useState} from "react";
import axios from "axios";
import {FriendsContext} from "../contexts/FriendsContext";



interface LoginProps {
    //loading: boolean;
    //setLoading: (loading: boolean) =>{};
    //history: any;
}

const Login:React.FC<LoginProps> = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const {loading, setLoading, history} = useContext(FriendsContext);

    const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        axios.post("http://localhost:5000/api/login", credentials)
            .then(res => {//todo: do I need a type for res with ts?
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                history.push("/friends");
                setLoading(false);
            }).catch(err =>{
                console.log("Error logging in: ", err);
                setLoading(false);
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return(
        <div className="login">
            {!loading ?
            <form className="form" onSubmit={submitLogin}>
                <label className="label">
                    <input
                        className="input"
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                        value={credentials.username}
                    />
                </label>
                <label className="label">
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        value={credentials.password}
                    />
                </label>
                <button className="button">LOG IN</button>
            </form>
                : <CircularProgress/>}
        </div>
    );
}

export default Login;