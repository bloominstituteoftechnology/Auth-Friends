import React, {Component} from 'react'
import {connect} from 'react-redux'
import Styled from 'styled-components'
//actions
import {getPicture, login, loginStatus} from '../actions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            lostPasswordText: 'Forgot Password'
        }
    }
    componentDidMount = () => {
        //if token exists; check it against the server
        //if server likes it, redirect to /friends
        //if token doesn't exist or server doesn't like it, get background image
        const token = localStorage.getItem('token')
        token ?
            this.props.loginStatus(token)
                .then(res => res ? this.props.history.push('/friends') : this.props.getPicture())
            :   this.props.getPicture()
    }
    login = e => {
        e.preventDefault()
        //uncomment and comment out the next two lines for proper operation
        //keep them the same to play nicely with the server

        // const credentials = {username: this.state.username, password: this.state.password}
        const credentials = {username: 'Lambda School', password: 'i<3Lambd4'}
        this.props.login(credentials)
            .then(res => res === 'success' && this.props.history.push('/friends'))
            .catch(err => console.log(err))
    }
    h_input = e => {
        e.preventDefault()
        const tag = e.target.type === 'text' ? 'username' : 'password'
        this.setState({[tag]: e.target.value})
    }
    h_lostPassword = () => {
        this.setState({lostPasswordText: 'That Sucks'})
    }
    render = () => {
        return (
            <Wrapper img={this.props.img.url}>
                <div className='login-box'>
                    <h1>Login</h1>
                    <input onChange={this.h_input} placeholder='username' type='text' />
                    <input onChange={this.h_input} placeholder='password' type='password' />
                    <button onClick={this.login} className='submit'>Submit</button>
                    <div className='nope'>
                        <button onClick={this.h_lostPassword} className='forgot'>{this.state.lostPasswordText}</button>
                        <pre>|</pre>
                        <button className='create'>Create Account</button>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        img: state.pictureReducer.img,
        imgFetching: state.pictureReducer.fetching,
        imgError: state.pictureReducer.error,

        loginToken: state.loginReducer.token,
        loginLoggin: state.loginReducer.logging,
        loginError: state.loginReducer.error,
    }
}

export default connect(
    mapStateToProps,{getPicture, login, loginStatus})(Login)

const Wrapper = Styled.div`
    background-color: #222;
    background-image: url('${props => props.img}');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
        align-items: center;
        justify-content: center;
    filter: grayscale(100%);
    height: 100vh;
    width: 100vw;

    .login-box {
        background-color: rgba(0,0,0,.85);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem;

        h1 {
            color: #ccc;
            font-size: 3rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
        }
        input {
            background-color: transparent;
            border: 0;
            border-bottom: 1px solid #ccc;
            color: #ccc;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8rem;
            margin-bottom: 2rem;
            line-height: 3rem;
            outline: none;
            padding: 0.6rem;
            text-transform: uppercase;
        }
        button {
            background-color: transparent;
            border: 0;
            color: #ccc;
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            text-transform: uppercase;
            &:hover {
                color: #fff;
            }
        }
        .nope {
            color: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            pre {
                font-size: 2rem;
            }
            button {
                font-size: 1rem;
                outline: none;
            }
        }
    }
`