import React, {Component} from 'react'
import Friend from './Friend'
const ContactPage = (props) => {

    return (
        <div>
           {props.friends.map( friend => <Friend name={friend.name} key={friend.id} email={friend.email} age={friend.age} />)}
        </div>
    )
}

 export default ContactPage;