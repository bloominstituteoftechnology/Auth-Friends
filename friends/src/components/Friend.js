import React, { useState, useEffect } from 'react'

const Friend = (props) => {
    return(
        <div>
            {props.name}
            {props.age}
        </div>
    )
}

export default Friend