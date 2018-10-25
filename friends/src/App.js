import React from 'react'
import App from './components/App'
import './styles/App.css'
import CreateFriendForm from './components/AddFriendForm'

const AppWrap = () => {
    return (
        <div>
            <h1 className="title">Friends</h1>
            <App />
            <CreateFriendForm />
        </div>
    )
}

export default AppWrap
