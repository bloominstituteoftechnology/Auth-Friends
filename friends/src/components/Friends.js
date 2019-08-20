import React from 'react'
import logo from '../logo.png'

 import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../actions'

 class Friends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

     render() {
        return (
            <div className='App-wrapper'>
                <Link to='/'>
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <h2 id='list'>List of friends:</h2>
                {this.props.friends.map(friend => {
                    return (
                        <div className='friends' key={friend.id}>
                            <strong>{friend.name}</strong>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

 const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

 export default connect(
    mapStateToProps,
    { getData }
)(Friends)