import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
    input {
        border-radius: 10px;
        height: 20px;
        padding: 5px 5px;
    }
    button {
        background: #66cdaa;
        height: 50px;
        border: none;
        border-radius: 20px;
        color: white;
        font-size: 20px;
        font-family: "FredokaOne-Regular";
        transition: background 0.5s;
        cursor: pointer;
        &:hover {
            background: orange;
            transition: background 0.5s;
        }
    }

`

const Login = props => {

    const [ form, setForm ] = useState({ username: "", password: "" });
    const [ loading, setLoading ] = useState(false);

    const handleOnChange = ({ target: { value, name }}) => { setForm({...form, [name]: value}) }

    const handleOnSubmit = e => {
        e.preventDefault();
        setLoading(true)
        axios.post("http://localhost:5000/api/login", form)
        .then(res => {
            props.setUser(res.data.username)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/home");
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    return (
        <Container>
            <h2>Enter your credentials</h2>
            <StyledForm onSubmit={handleOnSubmit}>
                <label>Username</label>
                <input type="text" value={form.username} onChange={handleOnChange} name="username"/>
                <label>Password</label>
                <input type="password" value={form.password} onChange={handleOnChange} name="password" />
                <button>{loading ? "loading..." : "Login"}</button>
            </StyledForm>
        </Container>
    )
}

export default Login;