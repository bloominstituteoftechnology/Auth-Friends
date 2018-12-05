import React from 'react'
import {Section, H2, H3} from './../styles'

const Friend = props => {
    return (
        <Section>
        <H2>{props.friend.name}</H2>
        <H3>{props.friend.age}</H3>
        <H3>{props.friend.email}</H3>
        </Section>
    )
}

export default Friend