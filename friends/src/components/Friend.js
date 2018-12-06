import React from 'react'
import {Section, H2, H3, Button} from './../styles'

const Friend = props => {
    return (
        <Section selected={props.selected} onClick={()=> props.toggleSelected(props.index)}>
        <H2>{props.friend.name}</H2>
        <H3>Age: {props.friend.age}</H3>
        <H3>Email: {props.friend.email}</H3>
        <Button onClick={()=> props.deleteFriend(props.id)}>Delete Friend</Button>
        </Section>
    )
}

export default Friend